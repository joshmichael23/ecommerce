import React from 'react'
import mobilemenustyle from './MobileMenu.module.css';
import Image from 'next/image';

const MobileMenu = (props) => {
  return (
    <div className={!props.openMenu? mobilemenustyle.mobilemenu : `${mobilemenustyle.mobilemenu} ${mobilemenustyle.open}`}>
      <div className={mobilemenustyle.wrapper}>
          <button onClick={()=> props.setOpenMenu(!props.openMenu)}>
            <Image
            src="/icon-close.svg"
            alt="Menu"
            width="50"
            height="50"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            />
          </button>

          <ul className={mobilemenustyle.links}>
            <li>Collection</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
      </div>
    </div>
  )
}

export default MobileMenu
