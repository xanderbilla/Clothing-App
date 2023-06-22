import React, { useState, useEffect } from 'react';
import styles from '../styles/ratingSection.module.css';
import Rating from '@mui/material/Rating';
import RatingCard from './RatingCard';
import { Link, useLocation } from 'react-router-dom';
import { API } from 'aws-amplify';

const RatingSection = ({ isLogin, user, averageRating }) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);
  const [review, setReview] = useState('');
  const [message, setMessage] = useState('');
  const prod = useLocation().pathname.split('/')[2];

  const fetchReviews = async () => {
    try {
      const response = await API.get('eCommerceApi', '/review', {
        queryStringParameters: {
          prodId: prod,
        },
      });
      const sortedData = response.sort((a, b) => {
        const timestampA = new Date(a.timestamp).getTime();
        const timestampB = new Date(b.timestamp).getTime();
        return timestampB - timestampA;
      });
      setData(sortedData);
      console.log(sortedData);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);
  
  const resetForm = () => {
    setReview('');
    setValue(0);
    setMessage('');
  };

  const onSave = () => {
    if (value === 0 || review === '') {
      setMessage('Please enter the rating!!!');
      return;
    }
  
    const myInit = {
      body: {
        custId: user.attributes.sub,
        custName: user.attributes.name,
        review: review,
        rating: value,
        prodId: prod,
      },
    };
  
    API.post('eCommerceApi', '/review', myInit)
      .then((response) => {
        resetForm();
        fetchReviews();
        setMessage('Review posted successfully!');
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  
  useEffect(() => {
    let timeout;
    if (message) {
      timeout = setTimeout(() => {
        setMessage('');
      }, 1000);
    }
  
    return () => {
      clearTimeout(timeout);
    };
  }, [message]);
  


  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <span className={styles.title}>Rating & Review</span>
        <div className={styles.detail}>
          <Rating name="read-only" value={averageRating} precision={0.1} readOnly />
          <span className={styles.rating}>({averageRating} / 5 | {data.length} Reviews)</span>
        </div>
      </div>
      <div className={styles.bottom}>
        {isLogin ? (
          <div className={styles.newRating}>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
              {message && <span>{message}</span>}
            <textarea
              className={styles.input}
              required
              rows="4"
              cols="50"
              placeholder="Your Review..."
              onChange={(e) => setReview(e.target.value)}
            />
            <div className={styles.buttons}>
              <button className={styles.button} onClick={onSave}>
                Post Review
              </button>
            </div>
          </div>
        ) : (
          <span className={styles.message}>
            <Link to="/login" className={styles.link}>
              Login
            </Link>{' '}
            to review the product
          </span>
        )}
        {data.length !== 0 ? (
          data.map((item) => <RatingCard data={item} key={item.orderId} fetchReviews={fetchReviews} />)
        ) : (
          <span className={styles.message}>There are no reviews</span>
        )}
      </div>
    </div>
  );
};

export default RatingSection;
