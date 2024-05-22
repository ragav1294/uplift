import styles from "./hero.module.scss";
import { CustomButton } from "@/components/button/button";
import { SecondaryButton } from "../button/secondary";

export const HeroSection = ()=>{
    return(
        <div className={styles.heroMain}>
            <h1>UPLIFT YOUR JOURNEY TO SUCCESS WITH OUR <br/> EMPOWERING EDUCATION SERVICES. <br/>DISCOVER COURSES CRAFTED TO PROPEL YOU <br/>TOWARDS GREATNESS.</h1>
            <div className={styles.heroBtnContainer}>
                <CustomButton text="Get Started"/>
                <SecondaryButton text="Explore our courses"/>
            </div>
        </div>
    )
}