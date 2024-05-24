import React from 'react';
import Image from 'next/image';
import styles from './navbar.module.scss';
import { HamburgerMenu } from './HamburgerMenu';

export const Navbar = ({ refs }) => {
  const handleScroll = (ref) => {
    if (ref.current) ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={styles.navMain}>
      <div className={styles.navLeft}>
        <div>
          <Image src="/Uplift-logo.svg" alt="Uplift Logo" width={100} height={100} />
        </div>
        <h1>Uplift</h1>
      </div>

      <div className={styles.navRight}>
            <HamburgerMenu refs={refs}/>
          <ul className={styles.desktop}>
            <li onClick={() => handleScroll(refs.homeRef)}>Home</li>
            <li onClick={() => handleScroll(refs.servicesRef)}>Services</li>
            <li onClick={() => handleScroll(refs.coursesRef)}>Courses</li>
            <li onClick={() => handleScroll(refs.FAQRef)}>FAQ</li>
            <li onClick={() => handleScroll(refs.ContactRef)}>Contact Us</li>
          </ul>
      </div>
    </div>
  );
};
