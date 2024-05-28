import styles from "./services.module.scss"
import Image from 'next/image';
import { useEffect, useState } from "react";

export const Services = ({image,subHeading,para,index})=>{
    const [isMobile, setIsMobile ] = useState(false);
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 800);
        };
            checkIsMobile();
    
        window.addEventListener('resize', checkIsMobile);
    
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);
    
    return (
        <div className={styles.contentMain}>
           {(index %2==0 || isMobile )? (
            <>
                <div className={styles.contentRight}>
                    <h2 className={styles.subHeading}>{subHeading}</h2>
                    <p className={styles.para}>{para}</p>
                </div> 

                <div className={styles.imgContainer}>
                    <Image src={`/${image}`} alt={image} height={400} width={400}/>
                </div>
            </>
           ): (
            !isMobile && (
            <>
                <div className={styles.imgContainer}>
                    <Image src={`/services/${image}`} alt={image} height={500} width={500}/>
                </div>

                <div className={styles.contentRight}>
                    <h2 className={styles.subHeading}>{subHeading}</h2>
                    <p className={styles.para}>{para}</p>
                </div>
            </>
            )
           )}
        </div>
    )
}