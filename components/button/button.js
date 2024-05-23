import styles from './button.module.scss';

export const CustomButton = ({ text, bgColor = '#FF3364', hoverColor = '#FF6699',hoverTextColor = "black" ,textColor = "white"}) => {
  return (
    <div className={styles.btnMain}>
      <button 
        className={styles.btn} 
        style={{ 
          '--btn-bg-color': bgColor, 
          '--btn-hover-bg-color': hoverColor ,
          '--btn-hover-text-color':hoverTextColor,
          '--btn-text-color': textColor
        }}
      >
        <div className={styles.content} />
        {text}
      </button>
    </div>
  );
};
