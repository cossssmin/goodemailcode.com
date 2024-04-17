---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  # name: "Good Email Code"
  text: "Email code resources and examples"
  image:
    src: /logo.svg
    alt: VitePress
  # tagline: Welcome to the arrogantly named library of, Good Email Code
  actions:
    - theme: brand
      text: Get Started
      link: /email-code/template
    - theme: alt
      text: Contribute
      link: https://github.com/M-J-Robbins/good-email-code

features:
  - title: Code
    icon:
      src: /code.svg
    details: From base layouts to columns and spacers, these examples will help you get started
  - title: Enhancements
    icon:
      src: /enhancements.svg
    details: Advanced email coding techniques and experiments to enhance your emails
  - title: Accessibility
    icon:
      src: /accessibility.svg
    details: Improve your email's accessibility so that everyone can read it
---

<div style="max-width: 75ch; margin: 0 auto">

  ## Welcome to the arrogantly named library of, Good Email Code

  I always enjoy writing and talking about email code so I decided to set up this site to share code and explain the reasons behind everything I’m doing. You are welcome to simply copy and paste code or you can read up and learn the theory behind it.

  The code here is what I would call best practice (other may disagree) and my theory behind that is.

  > Priority is given to making sure the code works. This means making sure it is semantic, functional, accessible and meeting user expectations. Consistency between email clients and pixel perfect design are also important but always secondary.

  Please also consider that this is a personal site and I’m dyslexic. It is probably full of spelling and grammar errors, don’t discount the content because of this, just politely let me know and I can fix it.

  With all that in mind, look at these cool things I’ve written:

  ### Email code

  - [Base Template](/email-code/template) - A base template to wrap all the email content in.
  - [Preview Text](/email-code/preheader) - Small preview text that shows in the inbox but not in the email.
  - [Container](/email-code/container) - Place multiple columns of content next to each other.
  - [Columns](/email-code/columns) - A centered column to house all the email content.
  - [Text](/email-code/text) - Basic text elements.
  - [CTA Link](/email-code/link-button) - A link that is styled to look like a button.
  - [Hr](/email-code/hr) - A horizontal rule, used to separate sections of content.
  - [Spacing](/email-code/spacing) - Adding horizontal or vertical spacers between elements in email.

  ### Email enhancements

  - [Absolute Position](/email-enhancements/faux-absolute-position) - Replicating position:absolute; to work across email clients.
  - [Stopping Gmail image popups](/email-enhancements/stop-gmail-image-popup) - How to block the Gmail image lightbox from popping up.
  - [CSS Triangles](/email-enhancements/css-triangles) - A triangle shape, made with code to avoid using an image.
  - [CSS Art](/email-enhancements/css-art) - Creating images with CSS.
  - [SVG in email](/email-enhancements/svg) - Using embedded or external SVG's in an email.
  - [SVG to VML](/email-enhancements/svg-to-vml) - How to manually convert an SVG image into a VML image.
  - [Picture](/email-enhancements/picture) - How to use the picture element in an email.
  - [Text shadow](/email-enhancements/text-shadow) - Replicating text-shadow to work across email clients.
  - [MSO styles](/email-enhancements/mso-styles) - Digging in to Outlook specific CSS styles.

  ### Email accessibility

  - [Using rem and em units in email](/email-accessibility/rem-and-em) - How and why to use relative units in email.
  - [Should you use an `<h1>` in email code?](/email-accessibility/should-you-use-an-h1-in-email-code) - What are the possible issues.
  - [ARIA landmarks in Email](/email-accessibility/aria-landmarks-in-html-email) - Which landmarks can we use in email, and how to use them.
  - [Text In Images](/email-accessibility/text-in-images) - Looking at some of the issues associated with including text in images.
  - [Visually hidden text](/email-accessibility/visually-hidden-text) - Text that is picked up by screen readers but doesn’t appear on

</div>
