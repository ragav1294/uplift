"use client"
import React, { useState ,useRef} from 'react';
import Image from 'next/image'
import styles from "./courses.module.scss";
import { CustomButton } from "@/components/button/button";

export const Courses = ({image,courseName,courseDetails,hoverDetails,refElement})=> {
    const [isHovered, setIsHovered] = useState(false);
    const hoverEl = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log(hoverEl.current);
    if(hoverEl.current) hoverEl.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = (ref)=>{
      if (ref.current) ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
        <div className={styles.gradientContainer} onMouseLeave={handleMouseLeave} style={{ backgroundColor: isHovered && '#FF3364' }}>
            <div className={styles.contentContainer} ref={hoverEl}>
                {!isHovered ? (
                <>
                <div className={styles.imgContainer}>
                <Image src={`/courses/${image}`} alt={courseName} height={400} width={400}></Image>
                </div>
                <div className={styles.courseName}><h1>{courseName}</h1></div>
                <div className={styles.courseDetails}><p>{courseDetails}</p></div>
                <div className={styles.btnContainer} onClick={handleMouseEnter}><CustomButton text="Know More" bgColor="black" hoverColor="rgb(61, 60, 60)" hoverTextColor="white"/></div>
                </>
                ):(
                    <>
                      <div className={styles.hoverDiv}>
                        <span onClick={handleMouseLeave}>X</span>
                        <p className={styles.hoverDetails}>{hoverDetails}</p>
                      </div>
                      <div className={styles.btnContainer} onClick={()=>handleClick(refElement)}><CustomButton text="Enroll Now" bgColor="black" textColor="white" hoverColor="rgb(61, 60, 60)" hoverTextColor="white"/></div>
                    </>
                )
                }
            </div>
        </div>
    )
}