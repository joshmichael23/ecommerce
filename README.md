
# Frontend Mentor - E-commerce product page solution

  

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

  

## Table of contents

  

- [Overview](#overview)

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [My process](#my-process)
	- [Built with](#built-with)
	- [What I learned](#what-i-learned)
	- [Useful resources](#useful-resources)
- [Author](#author)

## Overview

  

### The challenge

  

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot
![](./screenshots/mobile%20active.png)
![](./screenshots/mobile%20preview.png)
![](./screenshots/desktop%20active.png)
![](./screenshots/desktop%20preview.png)


### Links

- Solution URL: [Frontend Mentor](https://your-solution-url.com)
- Live Site URL: [Vercel](https://your-live-site-url.com)

  

## My process
### Built with
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework

### What I learned
I learned how to do the carousel for the products part with the help of W3Schools and Stackoverflow.
  
  ```css
.pictures-container{
		max-width: 1000px;
		position: relative;
		margin: auto;
		border-radius: 1rem;
		display: grid;
		row-gap: 1rem;
}

.product-image{
		border-radius: 1rem;
		width: 100%;
		height: auto;
		display:none;
}

.fade {
		animation-name: fade;
		animation-duration: 1s;
}

@keyframes  fade {	
		from {opacity: .4}
		to {opacity: 1}
}
```
  

### Useful resources

  

- [Carousel from W3Schools](https://www.w3schools.com/howto/howto_js_slideshow.asp) - This helped me for the carousel of the products page.
- [Scroll to page on top ](https://bobbyhadz.com/blog/react-scroll-to-top#:~:text=What%20is%20this%3F-,If%20you%20need%20to%20scroll%20to%20the%20top%20of%20the,handling%20scroll%20events%20in%20React%3F) - This is an amazing article which helped me scroll to the top when cart is being added.
  

## Author
- Frontend Mentor - [@joshmichael23](https://www.frontendmentor.io/profile/joshmichael23)
