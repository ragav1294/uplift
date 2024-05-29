import Image from "next/image";
import styles from './contact.module.scss';
import { CustomButton } from "../button/button";
import { useState } from "react";


export const Contact=() =>{
  const [ copied,setCopied ] = useState(false);
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
      text : "studentsupport@upliftedu.com",
    }
  ];

  const form = ["Full Name", "Phone Number", "Message"];

  const handleClick = (index)=>{
    console.log(index);
    if( index ==0 ) window.open("https://maps.app.goo.gl/99dzJyA8zmDF4KAPA",'_blank');
    if( index ==1 ){
      setCopied(true);
      copyToClipboard();
      setTimeout(()=>setCopied(false),2000)
    }
    if( index == 2) window.location.href = 'mailto:studentsupport@upliftedu.com?subject=Customer Enquiry&body=Body';
  }

    const copyToClipboard = () => {
        const tempInput = document.createElement("input");
        tempInput.value = "9363807080";
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
    };
    
  return (
    <div className={styles.gradientContainer}>
        <div className={styles.leftContainer}>
           <h3 className={styles.contactUsHeading}>Let&apos;s Uplift Your Career</h3>
           {copied && <div className={styles.modal}>Phone No Copied to clipboard</div>}

            {contactUs.map((item,index)=>{
              return (
                <div className={styles.rowContainer} key={index} onClick={()=>handleClick(index)}>
                  <div className={styles.iconContainer}>
                    <Image src={`${item.image}`} alt={`${item.heading}`} height={40} width={40}/>
                  </div>
                  <div className={styles.contentContainer}>
                    <h3>{item.heading}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              )
            })}
        </div>

    <div className={styles.rightContainer}>
      <div className={styles.innerContainer}>
        <h3 className={styles.heading}>Let&rsquo;s Connect</h3>

        <form name="uplift-contact-form" data-netlify="true">
          {form.map((el, inx) => {
            return (
              <div className={styles.formContainer} key={inx}>
                <h3>
                  {el}
                  <span>*</span>
                </h3>
                <input />
              </div>
            );
          })}
        </form>

          <div className={styles.btnContainer}>
            <CustomButton text="Submit" bgColor="white" textColor="black" hoverColor="white" />
          </div>

        </div>
    </div>


    </div>
  )
}
