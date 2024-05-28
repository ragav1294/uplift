import React, { useState } from 'react';
import Image from 'next/image';
import styles from './FAQ.module.scss';

const FAQ = () => {
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

    const [openIndexes, setOpenIndexes] = useState([]);

    const toggleOpen = (index) => {
        setOpenIndexes((prevIndexes) => {
            if (prevIndexes.includes(index)) {
                return prevIndexes.filter((i) => i !== index);
            } else {
                return [...prevIndexes, index];
            }
        });
    };

    return (
        <div className={styles.FAQMain}>
            {FaqData.map((data, index) => (
                <div className={styles.faqContainer} key={index}>
                    <div className={styles.content}>
                        <div className={styles.flexRow} onClick={() => toggleOpen(index)}>
                            <h2>{data.question}</h2>
                            <div className={styles.imgContainer}>
                                {openIndexes.includes(index) ? 
                                (
                                    <Image className={styles.upArrow} src="/icons/dropdown.png" alt="dropdown" height={50} width={50} />
                                )
                                :(
                                    <Image className={styles.downArrow} src="/icons/dropdown.png" alt="dropdown" height={50} width={50} />
                                )
                                }
                            </div>
                        </div>
                        <p className={openIndexes.includes(index) ? styles.open : styles.close}>{data.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
