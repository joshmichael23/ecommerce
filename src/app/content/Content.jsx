import React, { useState } from 'react'
import contentstyle from './content.module.css'
import Image from 'next/image'



function Content(props) {

  const [cartNo, setCartNo] = useState(0);

  function addAmount(n){
    
    if(cartNo==0 && n==-1){
        setCartNo(cartNo => 0);
    }else{
        setCartNo(cartNo=> cartNo+n);
    }
    
  }

  function AddToCart(){
    props.setAmount(amount=>amount+=cartNo);
    setCartNo(cartNo => 0)       
  }
  return (
    <div className={contentstyle.content}>
        <p className={contentstyle.brandname}>SNEAKER COMPANY</p>
        <h1>Fall Limited Edition Sneakers</h1>
        <p className={contentstyle.description}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div className={contentstyle.prices}>
            <p> $125.00 <span>50%</span></p> 
            <s>$250.00</s>
        </div>

        <div className={contentstyle.amount}>
            <button onClick={()=>addAmount(-1)}>-</button>
            <p>{cartNo}</p>
            <button onClick={()=>addAmount(1)}>+</button>    
        </div>
        <button 
        onClick={()=>{
          AddToCart(),
          (cartNo>0? window.scrollTo({top: 0, left: 0, behavior: 'smooth'}) : "")
        }}
            className={contentstyle.btnAddToCart}>


            <div>

            </div>
            
            <p>Add to cart</p>
        </button>
    </div>
  )
}

export default Content
