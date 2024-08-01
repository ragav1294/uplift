import Image from 'next/image';
import styles from './stories.module.scss';
// import { useRef, useLayoutEffect } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Stories = ({ stories }) => {
  // const component = useRef(null);
  // const slider = useRef(null);

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //       const storyContainer = slider.current;
  //       const panels = gsap.utils.toArray(storyContainer.querySelectorAll(`.${styles.storyDiv}`));
  //     gsap.to(panels, {
  //       xPercent: -100 * (panels.length - 1),
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: slider.current,
  //         pin: true,
  //         scrub: 1,
  //         markers: false,
  //         snap: 1 / (panels.length - 1),
  //         end: () => "+=" + slider.current?.offsetWidth,
  //       }
  //     });
  //   }, component);
  //   return () => ctx.revert();
  // });

  return (
    <div className={styles.outerStories}>
      <div className={styles.storiesMain}>
        {stories.map((story, index) => (
          <div key={index} className={styles.storyDiv}>
           <div className={styles.sucessTop}>
              <div className={styles.imgContainer}>
                <Image  src={story.gender === 'female' ? '/gender/female.jpg' : '/gender/male.jpg'}  alt='story' height={200} width={200}/>
              </div>
              <div className={styles.storyNameDiv}>
                <h2 className={styles.subHeading}>{story.name}</h2>
                <h3 className={styles.course}>{story.course}</h3>
              </div>
           </div>
            <p className={styles.para}>{story.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
