import styles from "./page.module.scss";
import { Navbar } from "@/components/navbar/navbar";
import { HeroSection } from "@/components/hero/hero";
import { Services } from "@/components/services/services";
import { Courses } from "@/components/courses/courses";

export default function Home() {
  const services = [
    {
      image: "personal-mentor.png",
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
      image : "spoken-english.png",
      courseName : "SPOKEN ENGLISH",
      courseDetails : "Speak with Confidence: Elevate your Spoken English skills with our dynamic course",
    },
    {
      image : "react.png",
      courseName : "FULL STACK DEVELOPMENT",
      courseDetails : "Speak with Confidence: Elevate your Spoken English skills with our dynamic course",
    },
    {
      image : "digital-marketing.png",
      courseName : "DIGITAL MARKETING",
      courseDetails : "Craft your online success story: Dive deep into Digital Marketing strategies with us!"
    },
    {
      image : "data-science.webp",
      courseName : "DATA SCIENCE AND MACHINE LEARNING",
      courseDetails : "Speak with Confidence: Elevate your Spoken English skills with our dynamic course",
    }
  ];

  return (
    <div className={styles.main}>
     <div className={styles.section}>
      <Navbar />
      <HeroSection />
     </div>
      
      <div className={styles.section}>
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
      
      <div className={styles.section}>
            <h1 className={styles.heading}>OUR COURSES</h1>
            <div className={styles.gridContainer}>
              {courses.map((course,index) => {
                return (
                  <Courses
                    image={course.image}
                    courseName={course.courseName}
                    courseDetails={course.courseDetails}
                    key={index}
                  />
                )
              })
              }
            </div>
      </div>

    </div>
  );
}
