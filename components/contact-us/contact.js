import Image from "next/image";
import styles from './contact.module.scss';
import { useState } from "react";

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
      text : "studentsupport@upliftedu.com",
    }
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); 
  const [ copied,setCopied ] = useState(false);

  function handleReset(){
    setEmail("");
    setMessage("");
    setName("");
    setPhone("");
  }
const handleSubmit = async (event) => {
  event.preventDefault();

  const data = {
      service_id: 'template_ezuinxm',
      template_id: 'uplift-form',
      user_id: 'p2-JTo_GIA6f-h01b',
      template_params: {
          from_name: name,
          mail: email,
          phone: phone,
          message: message
      }
  };

  try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (response.ok) {
          setMessage("Sent successfully");
          setShowSuccessPopup(true); 
      } else {
          const errorData = await response.json();
          throw new Error(JSON.stringify(errorData));
      }
  } catch (error) {
          setMessage("Error sending mail");
  } finally{
      handleReset();
      setShowSuccessPopup(true);
    }
};


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

          {!showSuccessPopup ?  
          (
            <form method='POST' id="contact-form" onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="orgname">Name<span>*</span></label><br />
                        <input type="text" name="Your name" value={name} onChange={(e) => setName(e.target.value)} required placeholder='Enter your name' />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email<span>*</span></label><br />
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='sample@gmail.com' />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone">Phone Number<span>*</span></label><br />
                        <input name="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder='Enter your phone number' />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message<span>*</span></label>
                        <textarea className={styles.textbox} value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Send us a message' name="message" />
                    </div>
                    <div className={styles.btnContainer}><button className={styles.submit} type="submit">Submit</button></div>
            </form>
          ):(
            <div className={styles.successContainer}>
              <svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 -960 960 960" width="44px" fill="#FF3364"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z"/></svg>
              <h3>Form Submitted SuccessFully</h3>
            </div>
          )
          }

        </div>
    </div>


    </div>
  )
}
