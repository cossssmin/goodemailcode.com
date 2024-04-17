---
title: Stopping Gmail image popups
description:  How to block the Gmail image lightbox from popping up.
head:
  - - meta
    - property: og:title
      content: Stopping Gmail image popups
  - - meta
    - property: og:description
      content: How to block the Gmail image lightbox from popping up.
---

# Stopping Gmail image popup

Sending emails with images in is very common, I'd guess that the vast majority of HTML emails have an `<img>` inside them somewhere.

When these emailed are opened in Gmail, it will often display a download arrow when hovered and open the image in a lightbox when clicked. Personally I don't see this as a problem and in some cases is a nice feature, I tend to leave this as is.

However if you want to stop it there are a few ways around this:

* Use a small image, Gmail only applies this to images of a certain size

  _Caveat: small images will have lower resolution._
* Add a link to the image. Gmail won't apply this to linked images.

  _Caveat: a link might not makes sense here._
* Use some code to hide the arrow, like variation on `img + div {display:none}`

  _Caveat: This only removes the download icon, the cursor still shows as a pointer and a click still open the lightbox. Also, using generic selectors like this opens up a lot of potential for unwanted targeting and additional bugs._

**So what _can_ you do about it?**

When chatting to [Jay](https://twitter.com/emailjay_) on [Twitter](https://twitter.com/M_J_Robbins/status/1276554228710989825) the other day about how they used the [faux absolute position](../email-enhancements/faux-absolute-position) technique in the [Email Weekly newsletter](http://emailweekly.co/), I realised that a simplified version of this technique could also be used to solve this Gmail issue.

## The Code

```html
<div style="max-height: 0; max-width: 600px;">
  <div style="max-width: 600px; padding-bottom: 50%; opacity: 0;"></div>
</div>
<img src="https://placekitten.com/600/300" alt="kitten" style="max-width: 100%;">
```

### Parent `<div>` styles

```html
<div style="max-height: 0; max-width: 600px;">
```

Here I'm setting the `max-height` to create the [faux absolute position](../email-enhancements/faux-absolute-position) effect. And setting `max-width` to match the width of the image we're covering.

### Inner `<div>` styles

```html
<div style="max-width: 600px; padding-bottom: 50%; opacity: 0;"></div>
```

Inside that div I'm again setting the `max-width` to match that of the image.

Instead of adding `height` I'm using `padding-bottom`. Doing it this way means the height adjusts responsively for smaller viewports.

To get the padding value right, the formula is `width / height * 100`. And because Gmail supports `calc` you could even code this as `padding-bottom: calc(100% * 300 / 600);`.

`calc` works particularly well when your calculation ends up with a recurring decimal i.e. _33.33333333333333%_ .

`opacity:0` is used here to increase the `z-index` so that our overlay sits on top of the image and not behind it.

## Bug fixing

If you are having issues with this, there are a couple of quick things to try.

To make sure this is covering the image at all times, try increasing the opacity to something like `opacity: 0.5;` and adding a background colour i.e. `background: red;`. Now you should see a red overlay, exactly covering the image.

If you need the cover to be center aligned try adding `margin: 0 auto;` to the outer div. Or for right aligned add `margin-left: auto;`.

## Accessibility

I feel like there may be some accessibility concerns with stopping a mouse user being able to click on an image. I'm not sure what that might be yet, but if you know of anything, please let me know.

It's worth noting that keyboard and screen reader users are still able to trigger the pop up.
