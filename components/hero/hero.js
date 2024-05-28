import styles from "./hero.module.scss";
import { useRef } from 'react'
import { CustomButton } from "@/components/button/button";
import { SecondaryButton } from "../button/secondary";

export const HeroSection = ({refs})=>{
    const handleClick = (ref)=>{
        console.log(ref);
        if (ref.current) ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return(
        <div className={styles.heroMain}>
            <h1>UPLIFT YOUR JOURNEY TO SUCCESS WITH OUR <br/> EMPOWERING EDUCATION SERVICES. <br/>DISCOVER COURSES CRAFTED TO PROPEL YOU <br/>TOWARDS GREATNESS.</h1>
            <div className={styles.heroBtnContainer}>
                <div className={styles.btnContainer} onClick={()=>handleClick(refs.coursesRef)}><CustomButton text="Get Started"/></div>
                <div className={styles.btnContainer} onClick={()=>handleClick(refs.servicesRef)}><SecondaryButton text="Explore our Services"/></div>       
            </div>
        </div>
    )
}