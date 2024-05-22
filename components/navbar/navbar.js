import Image from 'next/image'
import styles from "./navbar.module.scss";

export const Navbar=()=> {
  return (
    <div className={styles.navMain}>
        <div className={styles.navLeft}>
            <div>
                <Image src="/Uplift-logo.jpeg" alt="Uplift Logo" width={40} height={60} />
            </div>
            <h1>Uplift</h1>
        </div>

        <div className={styles.navRight}>
            <ul>
                <li className={styles.active}>Home</li>
                <li>Services</li>
                <li>Courses</li>
                <li>About Us</li>
                <li>FAQ</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}
