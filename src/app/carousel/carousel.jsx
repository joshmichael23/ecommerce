"use client";

import React from 'react'
import carouselstyles from './carousel.module.css';
import Image from 'next/image';
import { useState, useRef } from 'react';

function Carousel() {

  const [slideIndex, setSlideIndex] = useState(1);

  function plusSlides(n) {
    
    
    setSlideIndex(slideIndex=> slideIndex+=n);

    if(slideIndex == 4 && n == 1){
        setSlideIndex(slideIndex => 1);
    }else if(slideIndex == 1 && n == -1){
        setSlideIndex(slideIndex => 4);
    } 
  }

  function getCurrentSlide(){
    return slideIndex;
  }
  

  return (
    <div className={carouselstyles["pictures-container"]}>
        
        <Image
        src='/image-product-1.jpg'
        alt="Image 1"
        height={375}
        width={375}
        className={
            getCurrentSlide() == 1 ? 
            [carouselstyles["product-image"],
            carouselstyles.fade,
            carouselstyles.active].join(" ") :
            [carouselstyles["product-image"],
            carouselstyles.fade].join(" ")
        }   
        />

        <Image
        src='/image-product-2.jpg'
        alt="Image 1"
        height={375}
        width={375}
        className={
            getCurrentSlide() == 2 ? 
            [carouselstyles["product-image"],
            carouselstyles.fade,
            carouselstyles.active].join(" ") :
            [carouselstyles["product-image"],
            carouselstyles.fade].join(" ")
        }
        />

        <Image
        src='/image-product-3.jpg'
        alt="Image 1"
        height={375}
        width={375}
        className={
            getCurrentSlide() == 3 ? 
            [carouselstyles["product-image"],
            carouselstyles.fade,
            carouselstyles.active].join(" ") :
            [carouselstyles["product-image"],
            carouselstyles.fade].join(" ")
        }
        />

        <Image
        src='/image-product-4.jpg'
        alt="Image 1"
        height={375}
        width={375}
        className={
            getCurrentSlide() == 4 ? 
            [carouselstyles["product-image"],
            carouselstyles.fade,
            carouselstyles.active].join(" ") :
            [carouselstyles["product-image"],
            carouselstyles.fade].join(" ")
        }
        />

        <a 
            className={carouselstyles.prev}
            onClick={()=>plusSlides(-1)}
        ><span>&#10094;</span></a>
        <a 
            className={carouselstyles.next} 
            onClick={()=>plusSlides(1)}
        ><span>&#10095;</span></a>

        <div className={carouselstyles.thumbnails}>
            <a onClick={()=> setSlideIndex(slideIndex=> 1)} href="#">
                <Image
                    src='/image-product-1-thumbnail.jpg'
                    alt="Image 1"
                    height={80}
                    width={80}
                />
            </a>

            <a onClick={()=> setSlideIndex(slideIndex=> 2)} href="#">
                <Image
                    src='/image-product-2-thumbnail.jpg'
                    alt="Image 1"
                    height={80}
                    width={80}
                />
            </a>

            <a onClick={()=> setSlideIndex(slideIndex=> 3)} href="#">
                <Image
                    src='/image-product-3-thumbnail.jpg'
                    alt="Image 1"
                    height={80}
                    width={80}
                />
            </a>

            <a onClick={()=> setSlideIndex(slideIndex=> 4)} href="#">
                <Image
                    src='/image-product-4-thumbnail.jpg'
                    alt="Image 1"
                    height={80}
                    width={80}
                />
            </a>
            
        </div>
    </div>
  )
}

export default Carousel
