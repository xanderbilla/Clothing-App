import styles from '../styles/ratingSection.module.css'
import Rating from '@mui/material/Rating';
import RatingCard from './RatingCard';
const RatingSection = ({data}) => {
   
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <span className={styles.title}>Rating & Review</span>
                <div className={styles.detail}>
                    <Rating name="read-only" value={4.6} precision={0.1} readOnly />
                    <span className={styles.rating}>(4.6 / 5 | {data.length} Reviews )</span>
                </div>
            </div>
            <div className={styles.bottom}>
                {data.length !== 0 ? data.map((item) =>
                    < RatingCard data={item} key={item.orderId}/>
                )
                    :
            <span className={styles.message}>There are no reviews</span>
            }
            </div>
        </div >
    )
}

export default RatingSection