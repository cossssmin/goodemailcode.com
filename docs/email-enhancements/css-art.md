---
title: CSS Art
description: Creating images with CSS.
---

# CSS Art in email

The concept of CSS art is about creating images out of hand written code rather than using any type of graphics editor. Some great examples can be found on [css-art.com](https://css-art.com/) or [a.singeldiv.com](https://a.singlediv.com/), and I’ve put together a [CSS art collection on CodePen](https://codepen.io/collection/XmpLYx).

But I think my favourite examples can be found on [diana-adrianne.com](https://diana-adrianne.com/), I strongly recommend checking out Diana's work.

I love art. I love CSS. So it was only a matter of time before I had a go to see what I could achieve in email.

There have already been some great experiments created in email using a technique often called pixel art. This technique involves cutting an image up into blocks then placing it in a table and using background colours to create a blocky pixel like image for when images aren’t loaded.

There is a great post on Litmus about [email pixel art](https://www.litmus.com/blog/email-pixel-art-the-rarest-and-coolest-defensive-design-tactic/), and Mike Ragan a master of the technique did a [great talk about pixel art in email](https://vimeopro.com/campmon/future-of-email-london-2015/video/127547843) back in 2015.

For me I wanted to create something more CSS based rather than table based but still have it work across email clients.

There are some practical uses but mostly this is just for fun.

_*Just a quick note to say I’m going to completely ignore MSO Outlooks for now and tackle [MSO Outlook support](#mso-outlook-support) separately. So until we get to that section assume none of the following works in MSO versions of Outlook.*_

## Basic shapes

All of the artworks I'm going to cover are made up from variations of the following basic shapes.

### Square

<br>

<div style="height: 2em; width: 2em; background: red"></div>

```html
<div style="height: 2em; width: 2em; background: red"></div>
```

We just need a `height`, `width` to define the size and a `background` so we can see it.

### Circle

<br>

<div style="height: 2em; width: 2em; background: red; border-radius: 50%"></div>

```html
<div style="height: 2em; width: 2em; background: red; border-radius: 50%"></div>
```

Here we're just adding a `border-radius` to make it into a circle. We have quite a few options, we can set up to 8 values on a single element creating _elliptical corners_, with each of the 4 corners having a setting on each edge `border-radius:0 50% 10px 5px / 5px 10px 15px 20%`.

Border radius has pretty good support across email clients, a few that don't support it are `gmx`, `wed.de` and older versions of IBM Notes. It's also worth mentioning that Yahoo and AOL don't support the `/` separator (although we could use long hand styles there). So for this I'm limiting myself to only 4 values.

### Triangle

<br>

<div style="border: 2em solid transparent; border-top-color: red; border-bottom: none; display: inline-block"></div>

```html
<div style="border: 2em solid transparent; border-top-color: red; border-bottom: none; display: inline-block"></div>
```
We can use borders to create triangle shapes, I've got a more detailed write up on [CSS triangle in email](../email-enhancements/css-triangles) if you're interested.

### More advanced CSS

A lot of the web-based CSS art uses more advanced things like CSS gradients, `box-shadow`, `transform`, `position` and `clip-path` as well as `::before` and `::after` pseudo elements.

These can really expand what is possible however email support isn't quite there yet so I'm going to avoid them in this article, but if you're only targeting certain email clients then feel free to experiment with those options some more.

## Creating a picture

Everything we create is going to be using variations of those 3 simple shapes. The process I use it starting with a frame, then position one shape at time inside the until it creates a picture.

### Frame

First we’re going to create a frame to hold the picture.

```html
<div style="height: 5em; width: 5em; line-height: 1; mso-hide: all" role="img" aria-label="star"></div>
```

This serves several functions. It gives a height and width to the image, it adds alt text, it gives us a target to create scalable sizing, and defines an area for us to create our positioning from.

### Positioning shapes in the frame

For the web we'd use `position: absolute` here but that doesn't have great support in email, so instead we're going to use a simplified version of the [faux absolute position](../email-enhancements/faux-absolute-position) technique.

```html
<div style="border: 1px solid #000; display: inline-block; height: 5em; width: 5em; padding: .5em;" role="img" aria-label="6 point star icon">
  <div style="max-height: 0; max-width: 0;">
    <u style="border: 2em solid transparent; border-top: 3.5em solid gold; border-bottom: none; display: inline-block; margin-left: .5em; margin-top: 1.2em;"></u>
  </div>
</div>
```
<div class="inserted-code">
  <div style="border:1px solid #000;display:inline-block;height:5em;width:5em;padding:.5em;" role="img" aria-label="6 point star icon">
    <div style="max-height:0;max-width:0;">
      <u style="border:2em solid transparent;border-top:3.5em solid gold;border-bottom:none;display:inline-block;margin-left:.5em;margin-top:1.2em;"></u>
    </div>
  </div>
</div>

Inside the frame I've added `<div style="max-height: 0; max-width: 0;"></div>` and placed a triangle inside it using a `<u></u>` element.

The `max-height` and `max-width` mean that this shape will take up no space inside the frame. I can then position it relative to the top left using `margin-top` and `margin-left`. I'm using a `<u>` here to define the shape, purely to make the code easier to read. When looking at it I know `<u>` will be a shape and `<div>` will be a wrapper or position.

Now we have that working we can position a second triangle on top of it using the same positioning trick to create a 6 point start. Because both are set to use no height or width, they are both positioned from the same starting point.

```html
<div style="border: 1px solid #000; display: inline-block; height: 5em; width: 5em; padding: .5em;" role="img" aria-label="6 pont star icon">
  <div style="max-height: 0; max-width: 0;">
    <u style="border: 2em solid transparent; border-bottom: 3.5em solid gold; border-top: none; display: inline-block; margin-left: .5em;"></u>
  </div>
  <div style="max-height: 0; max-width: 0;">
    <u style="border: 2em solid transparent; border-top: 3.5em solid gold; border-bottom: none; display: inline-block; margin-left: .5em; margin-top: 1.2em;"></u>
  </div>
</div>
```

<div class="inserted-code">
  <div style="border:1px solid #000;display:inline-block;height:5em;width:5em;padding:.5em;" role="img" aria-label="6 pont star icon">
    <div style="max-height:0;max-width:0;">
      <u style="border:2em solid transparent;border-bottom:3.5em solid gold;border-top:none;display:inline-block;margin-left:.5em;"></u>
    </div>
    <div style="max-height:0;max-width:0;">
      <u style="border:2em solid transparent;border-top:3.5em solid gold;border-bottom:none;display:inline-block;margin-left:.5em;margin-top:1.2em;"></u>
    </div>
  </div>
</div>

### Using negative space

To get a little more out of the limited resources available to us, we can use visual tricks like negative space to create the illusion of shapes, that are otherwise impossible with this technique. Above we've created a 6 point start but you designer may ask for a 5 point star so lets make the designer happy.

```html
<div style="border: 1px solid #000; display: inline-block; height: 5em; width: 5em; padding: .5em; vertical-align: middle; text-align: center;" role="img" aria-label="5 point star icon">
  <div style="max-height: 0;">
    <u style="border: 1.75em solid transparent; border-bottom: 4.5em solid gold; border-top: none; display: inline-block"></u>
  </div>
  <div style="max-height: 0;">
    <u style="border: 1.75em solid transparent; margin-top: 3.5em; border-bottom: 1em solid white; border-top: none; display: inline-block"></u>
  </div>
  <div style="max-height: 0;">
    <u style="border: 2.5em solid transparent; border-top: 2em solid gold; border-bottom: none; display: inline-block; margin-top: 1.5em;"></u>
  </div>
</div>
```

First, we define a large triangle:

```html
<u style="border: 1.75em solid transparent; border-bottom: 4.5em solid gold; border-top: none; display: inline-block"></u>
```

... then we overlay a smaller triangle that matches our background colour to create a cut out:

```html
<u style="border: 1.75em solid transparent; margin-top: 3.5em; border-bottom: 1em solid white; border-top: none; display: inline-block"></u>
```

Here I've changed the background of the frame so it's easier to see the cut out.

<div class="inserted-code">
  <div style="border:1px solid #000;display:inline-block;height:5em;width:5em;padding:.5em;vertical-align:middle;text-align:center;background:#ccc;" role="img" aria-label="5 point star icon">
    <div style="max-height:0;">
      <u style="border:1.75em solid transparent;border-bottom:4.5em solid gold;border-top:none;display:inline-block"></u>
    </div>
    <div style="max-height:0;">
      <u style="border:1.75em solid transparent;margin-top:3.5em;border-bottom:1em solid white;border-top:none;display:inline-block"></u>
    </div>
  </div>
</div>

Then we just add in 1 more triangle and we have a 5 point star using negative space.

<div class="inserted-code">
  <div style="border:1px solid #000;display:inline-block;height:5em;width:5em;padding:.5em;vertical-align:middle;text-align:center;background:white;" role="img" aria-label="5 point star icon">
    <div style="max-height:0;">
      <u style="border:1.75em solid transparent;border-bottom:4.5em solid gold;border-top:none;display:inline-block"></u>
    </div>
    <div style="max-height:0;">
      <u style="border:1.75em solid transparent;margin-top:3.5em;border-bottom:1em solid white;border-top:none;display:inline-block"></u>
    </div>
    <div style="max-height:0;">
      <u style="border:2.5em solid transparent;border-top:2em solid gold;border-bottom:none;display:inline-block;margin-top:1.5em;"></u>
    </div>
  </div>
</div>

There is a limitation here that we need to know the background colour but you could force that on the frame if you like.

### Other visual tricks

There are a number of other tricks we can use, I'll mention a few briefly to give you some ideas.

*Crop* - Place and shape inside another shape and use `overflow:hidden` to crop it. This can be good for creating a shading affect.

*Curved line* - Use a board on one side of a circle that has no background colour.

*Diagonal line* - Place 2 long triangle on top of each other, one tall at the start going to a point at the end, that other starting at a point and expanding out.

## MSO Outlook support

None of this will work in MSO Outlook. But we can use something else, [Vector Markup Language (VML)](https://en.wikipedia.org/wiki/Vector_Markup_Language).

First up we hide what we’ve built from Outlook. Because this is built with simple elements all we need to to is add `mso-hide: all` and it won't show in MSO Outlook.

Then we replace the CSS image with a VML image. This is likely to just be ignored by other email clients, but if any extra spacing or content does show we can hide it with `display: none; mso-hide: none;`.

```html
<div style="border: 1px solid #000; display: inline-block; height: 5em; width: 5em; mso-hide: all" role="img" aria-label="CSS image alt">
  <!-- CSS image in here -->
</div>
<v:group style="width: 100; height: 100; display: none; mso-hide: none;" coordsize="100 100" alt="VML image alt">
  <!-- VML image in here -->
</v:group>
```

::: info VML Note
  You might have noticed the `width` and `height` styles for the `<v:group>` element do not specify units for their values. This is fine because VML defaults to using `px` so you can just use the number value, i.e. `style="width: 100; height: 100; ..."`.
:::

I'm writing up more about how to create VML images in a separate post, which will be coming soon...

## Complex artwork

I wanted to see how far I can push this and try and create something impressive.

I found a picture of a Rickenbacker 4001 bass guitar online (I wanted to draw my own bass but I didn't have a photo to hand when I started, so just grabbed a photo online).

To help with the drawing I set the photo as a background image on the frame and slowly added shapes on top of it (269 shapes to be exact), it's pretty much like tracing the image.

<iframe src="https://parcel.io/embed/10182ab0-3eaf-4624-ab32-cbe275d35ae7?parts=html&default-part=html&preview-size=500&theme=parcel-dark&layout=preview" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" scrolling="No" title="Subject goes here" loading="lazy" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-popups-to-escape-sandbox" samesite=none secure=true onload="this.src=this.src+'#source='+window.location.href" > </iframe>

## Practical uses

Ok so this is quite cool but can it be anything more than a gimmick?

It's not time efficient. Most of the time it would be much quicker to create an image in a graphics editor.

It adds code weight directly to the HTML file. This could cause issues when trying to keep the HTML under 100kb.

So no, don't change all of your images to be CSS based just yet, but there are some use cases where these are beneficial and would work well in production.

### Images off email

Some users choose not to load images by default. So before they load the images, you could show a more interesting fallback rather than a blank space where an image was.

Because of the time and effort it takes to make these it may be good to use more generic designs. For example, have a default graphic in place of a hero image or show [a simple avatar in place of a profile picture](https://useparcel.com/e/d9db23ea-c580-421a-87b3-4a9821862479).

### Vector image

Essentially these are vector images, they can be scaled up infinitely without distorting and have better email client support than using `<svg>`. As long as you've used `em` to create the sizes, all you need to do is change the `font-size` on the frame the image size changes without distorting. So if you want a large but simple image this would use minimal code and scale well.

### Page breaks

You could you use something to [transition between to different coloured sections of an email](https://useparcel.com/e/f6ce2d2f-372c-459f-82af-42c01c4a8820), or maybe spice up an [`<hr>`](../email-code/hr) to make it a bit more fancy.

### Dynamic content

You could create a graph using this technique and update the graphic automatically with the latest data when the email is sent.

### Interactive images

You can add hover or click styles to allow the user to interact with an image.

<iframe src="https://parcel.io/embed/ed817a31-b846-48f8-8675-3c7aedf0a780?parts=html&default-part=html&preview-size=500&theme=parcel-dark&layout=preview" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" scrolling="No" title="Subject goes here" loading="lazy" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-popups-to-escape-sandbox" samesite=none secure=true onload="this.src=this.src+'#source='+window.location.href" > </iframe>

### Dark mode

Because this is all done in code you can easily change the colours in the images based on `prefers-color-scheme`, or even change the image completely.

Switch your system settings to dark mode and see the image change:

<iframe src="https://parcel.io/embed/81c7c85d-2ba9-438f-b7fb-ae16ec8977a6?parts=html&default-part=html&preview-size=500&theme=parcel-dark&layout=preview" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" scrolling="No" title="Subject goes here" loading="lazy" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-popups-to-escape-sandbox" samesite=none secure=true onload="this.src=this.src+'#source='+window.location.href" > </iframe>
