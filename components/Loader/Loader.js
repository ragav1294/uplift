import styles from './Loader.module.scss';

export default function Loader() {
  return (
    <div className={styles.loader}>
        <h1>Change Starts Here With Uplift</h1>
      <div className={styles.spinner}></div>
    </div>
  );
}
