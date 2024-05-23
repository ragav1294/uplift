import styles from "./services.module.scss"
import Image from 'next/image';

export const Services = ({image,subHeading,para,index})=>{
    return (
        <div className={styles.contentMain}>
           {index %2==0 ? (
            <>
                <div className={styles.imgContainer}>
                    <Image src={`/${image}`} alt={image} height={500} width={500}/>
                </div>

                <div className={styles.contentRight}>
                    <h2 className={styles.subHeading}>{subHeading}</h2>
                    <p>{para}</p>
                </div>
            </>
           ): (
            <>
                <div className={styles.contentRight}>
                    <h2 className={styles.subHeading}>{subHeading}</h2>
                    <p>{para}</p>
                </div> 

                <div className={styles.imgContainer}>
                    <Image src={`/${image}`} alt={image} height={400} width={400}/>
                </div>
            </>
           )}
        </div>
    )
}