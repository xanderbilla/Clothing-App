import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { API, useDispatch } from '../utils/Imports';
import { addProduct } from '../utils/Imports';
import { getImage } from '../utils/getImage';
import styles from '../styles/productPage.module.css';
import ProductImages from '../components/ProductImages';
import MainImage from '../components/MainImage';
import ProductInfo from '../components/ProductInfo';
import AdditionalDetails from '../components/AdditionalDetails';
import QuantityControls from '../components/QuantityControls';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';
import RatingSection from '../components/RatingSection';

const ProductPage = ({ isLogin, setIsLogin, user }) => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const productId = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const dispatch = useDispatch();
  const [imageUrls, setImageUrls] = useState([]);
  const [review, setReview] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const urls = await Promise.all(product.img.map((imageKey) => getImage(imageKey)));
      setImageUrls(urls);
    };

    fetchImages();
  }, [product.img]);

  const handleSize = (size) => {
    setSelectedSize(size);
    console.log(size);
  };

  const handleColor = (color) => {
    setSelectedColor(color);
    console.log(color);
  };

  const handleCart = () => {
    dispatch(addProduct({ ...product, quantity, selectedSize, selectedColor }));
  };

  useEffect(() => {
    const calculateAverageRating = () => {
      if (review.length > 0) {
        const totalRating = review.reduce((sum, item) => sum + item.rating, 0);
        const average = totalRating / review.length;
        setAverageRating(average);
      }
    };

    calculateAverageRating();
  }, [review]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const apiName = 'eCommerceApi';
        const response = await API.get(apiName, `/products/${productId}`);
        setProduct(response);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [productId]);

  useEffect(() => {
    const getReview = async () => {
      try {
        const myInit = {
          queryStringParameters: {
            prodId: productId
          }
        };
        const response = await API.get('eCommerceApi', `/review`, myInit);
        setReview(response);
      } catch (error) {
        console.log(error);
      }
    };
    getReview();
  }, [productId]);

  return (
    <div className={styles.product}>
      <div className={styles.top}>
        <div className={styles.left}>
          {product.img && (
            <ProductImages
              images={imageUrls}
              selectedImg={selectedImg}
              setSelectedImg={setSelectedImg}
            />
          )}
          {product.img && <MainImage image={imageUrls[selectedImg]} />}
        </div>
        <div className={styles.right}>
          <ProductInfo title={product.title} description={product.desc} />
          <div className={styles.ratings}>
            <Rating name="read-only" value={averageRating} precision={0.1} readOnly />
            <span className={styles.rating}>({averageRating} / 5 | {review.length} Reviews)</span>
          </div>
          <span className={styles.price}>${product.discount_price}</span>
          <div className={styles.additional_details}>
            {product.size && (
              <AdditionalDetails
                title="Size"
                options={product.size}
                selectedOption={selectedSize}
                handleOption={handleSize}
              />
            )}
            {product.color && (
              <AdditionalDetails
                title="Color"
                options={product.color}
                selectedOption={selectedColor}
                handleOption={handleColor}
              />
            )}
          </div>
          <div className={styles.product_purchase}>
            <QuantityControls quantity={quantity} setQuantity={setQuantity} />
            <span className={styles.product__add} onClick={handleCart}>
              <AddShoppingCartIcon />
              ADD TO CART
            </span>
          </div>
          <div className={styles.product__details}>
            <span className={styles.product__detail}>Vendor: {product.vendor}</span>
            <span className={styles.product__detail}>Category: {product.category}</span>
            <hr className={styles.divider} />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <RatingSection isLogin={isLogin} user={user} averageRating={averageRating}/>
      </div>
    </div>
  );
};

export default ProductPage;
