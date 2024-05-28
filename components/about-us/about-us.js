import Image from 'next/image';
import styles from './about.module.scss';

const AboutUs = () => {
    return (
        <div className={styles.contentMain}>
            <div className={styles.left}>
                <div className={styles.content}>
                    <p className={styles.para}>
                        At Uplift Edu, we understand the importance 
                        of English proficiency in today's globalized world.
                        That's why we have expanded our services to offer
                        inclusive English courses online, catering to
                        individuals' diverse needs and constraints. Our
                        innovative and effective learning solutions have been
                        trusted by esteemed educational institutions such as
                        SRM, VIT, SA Engineering, and Rajalakshmi, among
                        100+ colleges.</p>
                        <p className={styles.para}>
                        We started our journey in 2014, primarily focusing 
                        on B2B services for educational institutions. Our 
                        success in placement and soft skills training led us 
                        to expand our operations to Tamil Nadu, Karnataka,
                        Kerala, and Andhra Pradesh. With the rise of online 
                        learning and the increasing demand for English 
                        proficiency, we have adapted our services to provide 
                        personalized and convenient courses through online
                        training. 
                    </p>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.imgContainer} >
                    <Image src="/about.jpeg" alt="about-us" height={600} width={400}/>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;