"use client";
import React, { useState } from 'react'
import Main from '../main/main';
import Header from '../header/header.jsx';
import MobileMenu from '../MobileMenu/mobileMenu.jsx';


function Root() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [amount, setAmount] = useState(0);
  return (
    <div className='root'>
        <Header 
            amount={amount} 
            openMenu={openMenu} 
            setOpenMenu={setOpenMenu}
            openCart={openCart}
            setOpenCart={setOpenCart}
        />
        <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        <Main 
            openCart={openCart} 
            amount={amount} 
            setAmount={setAmount}
        ></Main>
    </div>
      
    
  )
}
export default Root;
