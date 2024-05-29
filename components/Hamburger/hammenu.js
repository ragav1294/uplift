import React, { useState } from 'react';
import styles from './Hamburger.module.scss'
import Image from 'next/image';

export const Hamburger = ({refs}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleScroll = (ref) => {
    if (ref.current) ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  return (
    <div className={`${styles.hamburgerMenu}`} onClick={toggleMenu}>
        {!isOpen ? (
            <>
              <div className={styles.imgContainer}>
                 <Image src="/icons/hamburger.png" alt='hamburger-menu-icon' height={30} width={30}/>
              </div>
            </>
        ):(
            <>
                <div className={styles.open}></div>
                <div className={styles.open}></div>
            </>
        )}
      {isOpen && 
        <ul className={styles.items}>
             <li onClick={() => handleScroll(refs.homeRef)}>Home</li>
            <li onClick={() => handleScroll(refs.servicesRef)}>Services</li>
            <li onClick={() => handleScroll(refs.coursesRef)}>Courses</li>
            <li onClick={() => handleScroll(refs.storiesRef)}>Stories</li>
            <li onClick={() => handleScroll(refs.aboutRef)}>About Us</li>
            <li onClick={() => handleScroll(refs.ContactRef)}>Contact Us</li>
        </ul> 
      }
    </div>
  );
};

