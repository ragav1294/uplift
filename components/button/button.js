import styles from './button.module.scss';

export const CustomButton = ({ text, bgColor = '#FF3364', hoverColor = '#FF6699',hoverTextColor = "black" }) => {
  return (
    <div className={styles.btnMain}>
      <button 
        className={styles.btn} 
        style={{ 
          '--btn-bg-color': bgColor, 
          '--btn-hover-bg-color': hoverColor ,
          '--btn-hover-text-color':hoverTextColor,
        }}
      >
        <div className={styles.content} />
        {text}
      </button>
    </div>
  );
};
