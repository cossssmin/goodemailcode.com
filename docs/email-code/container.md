---
title: Container
description: Place multiple columns of content next to each other.
head:
  - - meta
    - property: og:title
      content: Container
  - - meta
    - property: og:description
      content: Place multiple columns of content next to each other.
---

# Container

The container is the main wrapper that holds your content. Typically in email this is a single 600px-wide center aligned column, that will shrink down on smaller viewports.
You can use multiple containers to get different background effects and separate up the content.

This could be combined with the [wrapping element from the template](/email-code/template#wrapping-element) if you like, but if you're using multiple containers then the wrapping element should wrap all of the containers.

## The Code

```html
<!--[if true]>
<table role="presentation" style="width: 37.5em" align="center"><tr><td>
<![endif]-->
<div style="max-width: 37.5em; margin: 0 auto">
  <!-- email content in here -->
</div>
<!--[if true]>
</td></tr></table>
<![endif]-->
```

Let's start with the MSO code, which I've wrapped in `<!--[if true]> <![endif]-->` conditional comments.

This is a bit of a broader version of the `<!--[if mso]> <![endif]-->` comment you may be more familiar with.

We then set a fixed width on the table - here I'm using `width: 37.5em` (which is 600px on most devices) but adjust that to your preference. I've added `role="presentation"` as this table is just for presentation and not for data so we need to make that clear to any assistive technology the end user might be using.

Then for the HTML version, I've set a `max-width` rather than a `width` this means if it's opened on a viewport smaller than 37.5em wide it will shrink to fit. No need for any media queries. To center the content I've set `margin: 0 auto` - that means `0` margin on the top and bottom, and `auto` margin on the left and right which fits it to the center of the viewport.

### Styling the container

Generally most styling can be added to the `<div>` and it will work for both the MSO and HTML version. But you may find issue with a few things like `padding` or `background` there are a couple of options to look at if you hit any issues.

You can set everything in the `<div>` then reset anything that is breaking in MSO using MSO styles, for example `padding: 2em; mso-padding-alt: 0;`. You can then set those styles specifically for MSO by placing them on the `<td>`.

The other option is to set all the styles for HTML on the `<div>` and all the styles for MSO on the `<td>`. We already have code to hide the table from the HTML version so here we could also add code to hide the HTML version from MSO.

```html
<!--[if true]>
<table role="presentation" style="width: 37.5em" align="center"><tr><td>
<![endif]-->
<!--[if !true]><!-->
  <div style="max-width: 37.5em; margin: 0 auto">
<!--<![endif]-->
  <!-- email content in here -->
<!--[if !true]><!-->
  </div>
<!--<![endif]-->
<!--[if true]>
</td></tr></table>
<![endif]-->
```

### Adding a background colour to the outer body

For the most part, you can simply add the style to the body element, for example `<body style="background: #000000">`. Then, add a wrapping `div` around the entire content of the email, i.e. `<div style="background: #000000">`. Between these two, this will cover almost every email client.

However this doesn't cover Windows Mail, to get that as well we need to make some changes to our MSO table that we're using:

```html
<div style="background: #000000">
  <!--[if true]>
  <table role="presentation" width="100%" align="center" style="background: #000000"><tr><td></td><td style="width: 37.5em; background: #ffffff">
  <![endif]-->
  <div style="max-width: 37.5em; margin: 0 auto; background: #ffffff">
    <!-- email content in here -->
  </div>
  <!--[if true]>
  </td><td></td></tr></table>
  <![endif]-->
</div>
```

Here I've changed the width to `width="100%"` to fill the screen, now I can set the background on this table. Then I add a `<td></td>` either side of our content, creating a table with 3 cells. The middle `<td>` now takes the width and background colour of our container `style="width: 37.5em; background: #ffffff"`

## No table version

This is much more experimental you may find there are a few restrictions but it does work for a lot of use cases.

```html
<div style="max-width: 37.5em; margin: 0 auto; mso-element-frame-width: 37.5em; mso-element: para-border-div; mso-element-left: center; mso-element-wrap: no-wrap-beside;">
```

* `max-width: 37.5em;` sets the width for every email client (apart from those with mso rendering) I've used `max-width` instead of `width` so it can adapt to smaller viewport without any additional code, 37.5em works out at 600px if the default font-size is 16px.
* `margin: 0 auto;` centers the container for every email client (apart from those with mso rendering)
* `mso-element-frame-width: 37.5em;` sets the width for mso email clients.
* `mso-element :para-border-div` allows us to use `<table>` elements inside the container.
* `mso-element-left: center;` centers the container.
* `mso-element-wrap: no-wrap-beside;` stops any additional element floating alongside.

I have an old [GitHub repo](https://github.com/M-J-Robbins/get-off-the-table) that goes into more detail on this method.
