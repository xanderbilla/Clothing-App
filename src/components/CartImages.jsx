import React, { useEffect, useState } from 'react'
import styles from '../styles/cart.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { getImage } from '../utils/getImage';

const CartImages = ({ images }) => {
    const [imageUrls, setImageUrls] = useState([]);
    useEffect(() => {
        const fetchImages = async () => {
            const urls = await Promise.all(images.map((imageKey) => getImage(imageKey)));
            setImageUrls(urls);
        };

        fetchImages();
    }, [images]);
    return (
        <LazyLoadImage className={styles.product__image} src={imageUrls[0]} alt="" />
    )
}

export default CartImages