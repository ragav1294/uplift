import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './navbar.module.scss';
import { Hamburger } from '@/components/Hamburger/hammenu';

export const Navbar = ({ refs }) => {
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToSection = (ref) => {
    if (ref.current) ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={`${styles.navMain} ${isSticky && styles.sticky}`} ref={navbarRef}>
      <div className={styles.navLeft}>
        <div>
          <Image src="/Uplift-logo.svg" alt="Uplift Logo" width={100} height={100} />
        </div>
        <h1>Uplift</h1>
      </div>

      <div className={styles.navRight}>
        <Hamburger refs={refs} />
        <ul className={styles.desktop}>
          <li onClick={() => handleScrollToSection(refs.homeRef)}>Home</li>
          <li onClick={() => handleScrollToSection(refs.servicesRef)}>Services</li>
          <li onClick={() => handleScrollToSection(refs.coursesRef)}>Courses</li>
          <li onClick={() => handleScrollToSection(refs.FAQRef)}>FAQ</li>
          <li onClick={() => handleScrollToSection(refs.ContactRef)}>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};
