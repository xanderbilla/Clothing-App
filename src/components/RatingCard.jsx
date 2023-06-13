import styles from '../styles/ratingCard.module.css'
import Rating from '@mui/material/Rating';
import DeleteIcon from '@mui/icons-material/Delete';
import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';

const RatingCard = ({ data }) => {
    const [isClicked, setIsClicked] = useState(false)
    const [value, setValue] = useState(false)
    const [review, setReview] = useState(false)
    const [userId, setUserId] = useState('')
    const fetchUser = async () => {
        const user = await Auth.currentAuthenticatedUser();
        setUserId(user.attributes.sub)
    }

    useEffect(() => {
        fetchUser()
    }, [])

    const onSave = () => {

    }

    const onDelete = () => {

    }

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.userDetail}>
                    <img src="https://pbs.twimg.com/media/Fxy5YgeaIAcMuUh?format=jpg&name=large" alt="" className={styles.img} />
                    <div className={styles.userInfo}>
                        <span className={styles.custName}>{data.username}</span>
                        <span className={styles.timeStamp}>{data.timestamp}</span>
                    </div>
                </div>
                <div className={styles.detail}>
                    {data.userId === userId ?
                        <div className={styles.buttons}>
                            <button className={styles.button} onClick={() => setIsClicked(!isClicked)}>Edit</button>
                            <button className={styles.button} onClick={() => onDelete(data.reviewId)}><DeleteIcon /></button>
                        </div>
                        :
                        null
                    }
                    <Rating name="read-only" value={data.rating} precision={0.1} readOnly />
                </div>
            </div>
            <div className={styles.bottom}>
                {
                    isClicked ?
                        <>
                            <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue) }} />
                            <textarea className="input" rows="4" cols="50" placeholder="Your Review..." onChange={(e) => setReview(e.target.value)} />
                            <button className="button" onClick={onSave}>Save</button>
                        </>
                        :
                        data.review
                }
            </div>
        </div >
    )
}

export default RatingCard