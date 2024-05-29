import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './navbar.module.scss';
import { Hamburger } from '@/components/Hamburger/hammenu';

export const Navbar = ({ refs }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeItem, setActiveItem] = useState('home'); // Default active item
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

  const handleScrollToSection = (ref, section) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveItem(section);
    }
  };

  return (
    <div className={`${styles.navMain} ${isSticky && styles.sticky}`} ref={navbarRef}>
      <div className={styles.navLeft}  onClick={() => handleScrollToSection(refs.homeRef, 'home')}>
        <div className={styles.imgContainer}>
          <Image src="/Uplift-logo.svg" alt="Uplift Logo" width={100} height={100} />
        </div>
        <h1>UpliftEdu</h1>
      </div>

      <div className={styles.navRight}>
        <Hamburger refs={refs} />
        <ul className={styles.desktop}>
          <li
            className={activeItem === 'home' ? styles.active : ''}
            onClick={() => handleScrollToSection(refs.homeRef, 'home')}
          >
            Home
          </li>
          <li
            className={activeItem === 'services' ? styles.active : ''}
            onClick={() => handleScrollToSection(refs.servicesRef, 'services')}
          >
            Services
          </li>
          <li
            className={activeItem === 'courses' ? styles.active : ''}
            onClick={() => handleScrollToSection(refs.coursesRef, 'courses')}
          >
            Courses
          </li>
          <li
            className={activeItem === 'stories' ? styles.active : ''}
            onClick={() => handleScrollToSection(refs.storiesRef, 'stories')}
          >
            Stories
          </li>
          <li
            className={activeItem === 'about' ? styles.active : ''}
            onClick={() => handleScrollToSection(refs.aboutRef, 'about')}
          >
            About Us
          </li>
          <li
            className={activeItem === 'contact' ? styles.active : ''}
            onClick={() => handleScrollToSection(refs.ContactRef, 'contact')}
          >
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
};
