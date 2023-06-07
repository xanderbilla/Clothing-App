import styles from '../styles/ratingCard.module.css'
import Rating from '@mui/material/Rating';
import DeleteIcon from '@mui/icons-material/Delete';

const RatingCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.userDetail}>
                <img src="https://pbs.twimg.com/media/Fxy5YgeaIAcMuUh?format=jpg&name=large" alt="" className={styles.img} />
                    <div className={styles.userInfo}>
                    <span className={styles.custName}>John Doe</span>
                    <span className={styles.timeStamp}>May 24, 2023 | 11:06 PM</span>
                </div>
                </div>
                <div className={styles.detail}>
                    <div className={styles.buttons}>
                    <button className={styles.button}>Edit</button>
                    <button className={styles.button}><DeleteIcon/></button>
                    </div>
                    <Rating name="read-only" value={4.6} precision={0.1} readOnly />
                </div>
            </div>
            <div className={styles.bottom}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo est dicta natus doloribus porro alias vel excepturi assumenda! Quia voluptatum molestiae laudantium inventore vitae quo unde laboriosam cumque nesciunt velit necessitatibus explicabo deserunt, magni in perferendis ratione minus quos ad.
            </div>
        </div >
    )
}

export default RatingCard