import Image from 'next/image';
import styles from './stories.module.scss';

const Stories = ({stories}) => {
    const sample = [...stories,...stories];
    return (
        <div className={styles.storiesMain}>
            {stories.map((story,index)=>(
                <div key={index} className={styles.storyDiv}>
                    <div className={styles.imgContainer}><Image src="/about.jpeg" alt='story' height={200} width={200}/></div>
                    <h2 className={styles.subHeading}>{story.name}</h2>
                    <h3 className={styles.course}>{story.course}</h3>
                    <p className={styles.para}>{story.review}</p>
                </div>
            ))}
        </div>
    );
};

export default Stories;