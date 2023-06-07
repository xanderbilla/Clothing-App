import styles from '../styles/ratingSection.module.css'
import Rating from '@mui/material/Rating';
import RatingCard from './RatingCard';

const RatingSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <span className={styles.title}>Rating & Review</span>
                <div className={styles.detail}>
                    <Rating name="read-only" value={4.6} precision={0.1} readOnly />
                    <span className={styles.rating}>(4.6 / 5 | 455,000 Reviews )</span>
                </div>
            </div>
            <div className={styles.bottom}>
                <RatingCard />
                <RatingCard />
            </div>
        </div >
    )
}

export default RatingSection