'use client'
import Image from "next/image";
import styles from "./page.module.scss";
import { Navbar } from "@/components/navbar/navbar";
import { HeroSection } from "@/components/hero/hero";
import { Services } from "@/components/services/services";
import { Courses } from "@/components/courses/courses";
import { Contact } from "@/components/contact-us/contact";
import { useRef } from "react";
import Footer from "@/components/footer/footer";
import AboutUs from "@/components/about-us/about-us";
import FAQ from "@/components/FAQ/FAQ";
import Stories from "@/components/success/stories";

export default function Home() {
  const services = [
    {
      image: "group-discussion.webp",
      subHeading: "GROUP SESSIONS",
      para: "At Uplift.edu, our mission is to provide mentorship to learners of all backgrounds. We believe that education is the key to success, and we strive to help our students achieve their full potential with the help of industry experts."
    },
    {
      image: "personal-mentor.png",
      subHeading: "PERSONAL MENTORSHIP",
      para: "Embark on a journey of growth and discovery. Let's unlock your potential, tap into your creativity, and build a foundation for success. Our tailored mentorship programs and interactive group sessions cover a wide array of subjects such as English speaking, basic programming, web development, AI/ML, and digital marketing."
    },
  ];

  const courses = [
    {
      image: "spoken-english.png",
      courseName: "SPOKEN ENGLISH",
      courseDetails: "Speak with Confidence: Elevate your Spoken English skills with our dynamic course",
      hoverDetails: "English proficiency is crucial in today's globalized world. Our inclusive online English courses cater to individuals' diverse needs and constraints, helping you improve your language skills and boost your confidence."
    },
    {
      image: "react.png",
      courseName: "FULL STACK DEVELOPMENT",
      courseDetails: "Master Full Stack Development: From Frontend to Backend, become a coding maestro",
      hoverDetails: "In this digital age, web development skills are highly sought after. Our comprehensive course covers both front-end and back-end development, equipping you with the necessary skills to build dynamic and interactive websites."
    },
    {
      image: "digital-marketing.png",
      courseName: "DIGITAL MARKETING",
      courseDetails: "Craft your online success story: Dive deep into Digital Marketing strategies with us!",
      hoverDetails: "With the rise of digital marketing, businesses are constantly seeking professionals with expertise in this field. Our course covers various digital marketing strategies, including SEO, social media marketing, and email marketing, to help you become a well-rounded digital marketer."
    },
    {
      image: "data-science.webp",
      courseName: "DATA SCIENCE AND MACHINE LEARNING",
      courseDetails: "Chart your course in the data revolution: Acquire the skills of Data Science and Machine Learning",
      hoverDetails: "In today's data-driven world, the demand for data scientists and machine learning experts is on the rise. Our course covers essential concepts and tools in data science and machine learning, preparing you for a successful career in this field."
    }
  ];

  const FaqData = [
    {
        question: "Question1",
        answer: "Answer1"
    },
    {
        question: "Question2",
        answer: "Answer2"
    },
    {
        question: "Question3",
        answer: "Answer3"
    },
];

const stories = [
  {
    name: "Raji",
    course: "Spoken English",
    review: "I always dreamt of working in a multinational company, but my lack of confidence in English held me back. Then I found Uplift Edu's Spoken English course. The personalized sessions and expert trainers helped me improve my language skills and boosted my confidence. I learned about cultural nuances and effective communication techniques, which were invaluable during my job interviews. Thanks to Uplift Edu, I landed my dream job in a multinational company and am excelling in my career."
  },
  {
    name: "Bhuvanesh",
    course: "Full Stack Web Development",
    review: "I'm passionate about web development but struggled to find a comprehensive course covering both front-end and back-end development. That's when I discovered Uplift Edu's Full Stack Web Development course. The hands-on training and personalized sessions gave me a deep understanding of web development and helped me build an impressive portfolio. Thanks to Uplift Edu, I secured a job as a full stack developer in a top IT company, and I credit them for my success."
  },
  {
    name: "Kumar",
    course: "Digital Marketing",
    review: "With a background in marketing, I wanted to upgrade my skills in the digital world. Uplift Edu's Digital Marketing course exceeded my expectations. The in-depth curriculum and practical training taught me various digital marketing strategies and tools, and how to effectively implement them. Thanks to Uplift Edu, I landed a job as a social media manager in a renowned company. They helped me turn my passion for marketing into a successful career in the digital world."
  }
];



  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const coursesRef = useRef(null);
  const FAQRef = useRef(null);
  const ContactRef = useRef(null);

  const refs = {
    homeRef,
    servicesRef,
    coursesRef,
    FAQRef,
    ContactRef
  };


  return (
    <div className={styles.main}>

      <div className={styles.imgContainer}>
         <Image src="/arrow.png" alt="arrow-bg" width={400} height={700} className={styles.arrow}/>
      </div>
      <div className={styles.imgContainer}>
         <Image src="/uplift.png" alt="uplift-bg" width={500} height={500} className={styles.upliftBg}/>
      </div>

     <div className={styles.section} ref={homeRef}>
      <Navbar refs={refs}/>
      <HeroSection refs={refs}/>
     </div>
      
      <div className={styles.section} ref={servicesRef}>
        <h1 className={styles.heading}>WHAT WE OFFER</h1>
        <div className={styles.servicesMain}>
          {services.map((service,index) => (
            <Services
              image={service.image}
              subHeading={service.subHeading}
              para={service.para}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
      
      <div className={styles.section} ref={coursesRef}>
            <h1 className={styles.heading}>OUR COURSES</h1>
            <div className={styles.gridContainer}>
              {courses.map((course,index) => {
                return (
                  <Courses
                    image={course.image}
                    courseName={course.courseName}
                    courseDetails={course.courseDetails}
                    hoverDetails={course.hoverDetails}
                    refElement = {ContactRef}
                    key={index}
                  />
                )
              })
              }
            </div>
      </div>

      <div className={styles.section}>
          <h1 className={styles.heading}>SUCCESS STORIES</h1>
          <Stories stories={stories}/>
      </div>

      <div className={styles.section}>
          <h1 className={styles.heading}>ABOUT US</h1>
          <AboutUs/>
      </div>

      <div className={styles.section} ref={ContactRef}>
        <h1 className={styles.heading}>CONTACT US</h1>
        <Contact/>
      </div>

      <div className={styles.section} ref={FAQRef}>
        <h1 className={styles.heading}>FREQUENTLY ASKED QUESTIONS</h1>
        <FAQ FaqData={FaqData}/>
      </div>
      
      <div>
        <Footer/>
      </div>
    </div>
  );
}
