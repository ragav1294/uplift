import styles from './button.module.scss';

export const CustomButton = ({ text }) => {

  return (
    <div className={styles.btnMain}>
      <button className={styles.btn}>
      <div className={styles.content}/>
      {text}
      </button>
    </div>
  );
};
