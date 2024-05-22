import React from 'react'
import Image from 'next/image';
import styles from './button.module.scss';

export const SecondaryButton= ({text})=> {
  return (
    <div className={styles.secondary}>
        <div>
            <p>{ text }</p>
        </div>
        <Image src="/right-arrow.svg" alt="Uplift Logo" width={40} height={50} />
    </div>
  )
}
