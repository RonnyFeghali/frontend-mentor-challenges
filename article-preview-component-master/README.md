# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Level](#level)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### Level
**Newbie**

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon
- Close the share popup by clicking anywhere outside of it

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JavaScript
- Responsive design

### What I learned

**Controlling images with `object-fit` and `object-position`**

Using `object-fit: cover` with `object-position` to fill a container while controlling which part of the image is visible:

```css
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left center;
}
```

**CSS border trick for the speech bubble arrow**

Creating a downward-pointing triangle using only borders on a zero-size pseudo-element:

```css
.share-popup::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid hsl(217, 19%, 35%);
}
```

**`margin-left: auto` in flexbox**

Pushing a flex child to the far right without needing `justify-content: space-between`:

```css
.share-btn {
    margin-left: auto;
}
```

**Click outside to close with `contains()`**

```js
document.addEventListener('click', function(e) {
    if (!shareButton.contains(e.target)) {
        sharePopup.classList.remove('active')
    }
})
```

### Continued development

- CSS transitions and animations to make the popup appear smoothly
- Better understanding of positioning contexts and how `position: relative` on a parent affects absolutely positioned descendants
- More complex JavaScript interactions and event handling

### AI Collaboration

I used Claude (Anthropic) as a learning assistant throughout this project.

- **Debugging** — helped diagnose why CSS wasn't loading (`src` vs `href` on the `<link>` tag), why icons weren't showing inside the popup (descendant selector affecting nested elements), and why the popup was being clipped (`overflow: hidden` on the container)
- **Concepts** — explained length units, `flex-grow`/`flex-shrink`/`flex-basis`, `object-fit`, and how `position: absolute` anchors to its nearest positioned ancestor
- **Code review** — identified redundant CSS properties and helped organize the stylesheet into logical sections

## Author

- Frontend Mentor - [@RonnyFeghali](https://www.frontendmentor.io/profile/RonnyFeghali)
