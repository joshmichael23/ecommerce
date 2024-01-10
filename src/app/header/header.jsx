// import React from 'react';
"use client";
import { useState } from 'react';
import headerstyle from './header.module.css';
import Image from 'next/image'

function check(n){

    console.log(n);
}
const Header = (props) => {
  return (
    <div className={headerstyle.header}>
        <div className={headerstyle.left}>
            <button onClick={()=>{
                props.setOpenMenu(!props.openMenu),
                check(props.openMenu)
            }} title="Menu" className={headerstyle.mobileMenu}>
                <Image
                    src="/icon-menu.svg"
                    alt="Menu"
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                />
            </button>
            <Image
                src="/logo.svg"
                alt="Logo"
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto'}}
            />

            
            <a>Collections</a>
            <a>Men</a>
            <a>Women</a>
            <a>About</a>
            <a>Contact</a>
            
        </div>

        <div className={headerstyle.right}>
            <label className={headerstyle.cart}>
                {props.amount>0 ? <span>{props.amount}</span> : ""}
                <button
                onClick={()=>props.setOpenCart(!props.openCart)}
                title="Cart">
                    <Image
                        alt="Cart"
                        src="/icon-cart.svg"
                        width="0"
                        height="0"
                
                        style={{ width: '100%', height: 'auto' }}
                    />
                </button>
            </label>
            <Image
                alt="Profile Pic"
                className={headerstyle["profile-pic"]}
                src="/image-avatar.png"
                width="50"
                height="50"
                sizes="100vw"
                style={{height: 'auto' }}             />
        </div>

    </div>
  )
}

export default Header
