import Image from "next/image";
import styles from './contact.module.scss';
import { CustomButton } from "../button/button";

export const Contact=() =>{
  const contactUs = [
    {
      image :"/contact-us/map.png",
      heading: "Meet Us In Office",
      text : "2nd Floor, Elysium Towers, Gopalapuram, Coimbatore.",
    },
    {
      image :"/contact-us/call.png",
      heading: "Contact Us At",
      text : "+91 9363807080",
    },
    {
      image :"/contact-us/mail.png",
      heading: "Email Us At Us",
      text : "Upliftedutech@gmail.com",
    }
  ];

  const form = ["Full Name", "Phone Number", "Message"];
  return (
    <div className={styles.gradientContainer}>
        <div className={styles.leftContainer}>
           <h3 className={styles.contactUsHeading}>Let&apos;s Uplift Your Career</h3>

            {contactUs.map((item,index)=>{
              return (
                <div className={styles.rowContainer} key={index}>
                  <div className={styles.iconContainer}>
                    <Image src={`${item.image}`} alt={`${item.heading}`} height={40} width={40}/>
                  </div>
                  <div>
                    <h3>{item.heading}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              )
            })}
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.innerContainer}>
            <h3 className={styles.heading}>Let&apos;s Connect</h3>
            
            {form.map((el,inx)=>{
              return (
                <div className={styles.formContainer} key={inx}>
                  <h3>{el}<span>*</span></h3>
                  <input></input>
                </div>
              )
            })
          }
            <div className={styles.btnContainer}>
              <CustomButton text="Submit" bgColor="white" textColor="black" hoverColor="white"/>
            </div>
          </div>

        </div>

    </div>
  )
}
