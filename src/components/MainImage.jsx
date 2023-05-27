import styles from '../styles/productPage.module.css';

const MainImage = ({ image }) => {
    return (
      <div className={styles.main_img}>
        <img src={image} className={styles.big__img} alt="" />
      </div>
    );
};
  
export default MainImage