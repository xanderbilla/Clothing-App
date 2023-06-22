import styles from '../styles/ratingCard.module.css';
import Rating from '@mui/material/Rating';
import DeleteIcon from '@mui/icons-material/Delete';
import { API, Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';

const RatingCard = ({ data, fetchReviews }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [value, setValue] = useState(data.rating);
  const [review, setReview] = useState(data.review);
  const [userId, setUserId] = useState('');

  const fetchUser = async () => {
    const user = await Auth.currentAuthenticatedUser();
    setUserId(user.attributes.sub);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const onSave = (reviewId) => {
    const myInit = {
      body: {
        rating: value,
        review: review,
      },
    };

    API.put('eCommerceApi', `/review/${reviewId}`, myInit)
      .then((response) => {
        console.log('Review Updated');
          fetchReviews(); 
          setIsClicked(!isClicked)
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

    const onDelete = (reviewId) => {
        API.del('eCommerceApi', `/review/${reviewId}`)
            .then((response) => {
                fetchReviews(); 
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.userDetail}>
                    <img
                        src="https://images.pexels.com/photos/16158164/pexels-photo-16158164/free-photo-of-nature-fashion-sunglasses-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className={styles.img}
                    />
                    <div className={styles.userInfo}>
                        <span className={styles.custName}>{data.custName}</span>
                        <span className={styles.timeStamp}>{data.timestamp}</span>
                    </div>
                </div>
                <div className={styles.detail}>
                    {data.custId === userId ? (
                        <div className={styles.buttons}>
                            <button
                                className={`${styles.button} ${isClicked ? styles.hide : ''}`}
                                onClick={() => setIsClicked(!isClicked)}
                            >
                                Edit
                            </button>
                            <button
                                className={`${styles.delete} ${isClicked ? styles.hide : ''}`}
                                onClick={() => onDelete(data.reviewId)}
                            >
                                <DeleteIcon />
                            </button>
                        </div>
                    ) : null}
                    <Rating name="read-only" value={data.rating} precision={0.1} readOnly className={isClicked ? styles.hide : ''} />
                </div>
            </div>
            <div className={styles.bottom}>
                {isClicked ? (
                    <div className={styles.edit}>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                        <textarea
                            className={styles.input}
                            rows="4"
                            cols="50"
                            placeholder={review}
                            onChange={(e) => setReview(e.target.value)}
                        />
                        <div className={styles.buttons}>
                            <button className={styles.button} onClick={() => onSave(data.reviewId)}>
                                Save
                            </button>
                            <button className={styles.button} onClick={() => setIsClicked(!isClicked)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                ) : (
                    data.review
                )}
            </div>
        </div>
    );
};

export default RatingCard;
