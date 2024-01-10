import React, { useState } from 'react'
import Cartstyle from './Cart.module.css';
import Image from 'next/image';

const Cart = (props) => {
  return (
    <div className={
        props.openCart ? 
                        `${Cartstyle.cart} ${Cartstyle.open}`
                      : Cartstyle.cart}>
      <div className={Cartstyle.innercart}>
        <p>Cart</p>

        {props.amount == 0 ?  
                                <p className={Cartstyle.emptyCart}>Your cart is empty</p>
        
                            :
                            <>
                                <div className={Cartstyle["cart-products"]}>
                                    <Image
                                        src={'/image-product-1-thumbnail.jpg'}
                                        alt="Product 1"
                                        height={50}
                                        width={50}
                                        className={Cartstyle.thumbnail}
                                    />
                                    <div className={Cartstyle.description}>
                                        <p>Fall Limited Edition Sneakers</p>
                                        <p className={Cartstyle["description-amountprices"]}> $125.00 x {props.amount} <span> ${125*props.amount}.00</span></p>
                                    </div>
                                    <button onClick={()=>props.setAmount(0)} className={Cartstyle.deleteBtn}>
                                    <Image
                                        src={'/icon-delete.svg'}
                                        alt="Product 1"
                                        height={20}
                                        width={20}
                                    />
                                    </button>
                                </div>

                                <button className={Cartstyle.checkoutBtn}>
                                Checkout
                                </button>
                                </>
        }


      </div>
    </div>
  )
}

export default Cart
