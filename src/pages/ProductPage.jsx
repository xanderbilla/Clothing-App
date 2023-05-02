import React, { useState, useEffect } from 'react'
import styles from '../styles/productPage.module.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useLocation } from 'react-router';
import { API } from 'aws-amplify';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

const ProductPage = () => {

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const location = useLocation()
  const productId = location.pathname.split("/")[2]
  const [product, setProduct] = useState({})
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const dispatch = useDispatch()

  function handleSize(size) {
    setSelectedSize(size);
    console.log(size);
  }

  const handleColor = (color) => {
    setSelectedColor(color);
    console.log(color);
  }

  const handleCart = () => {
    dispatch(addProduct(
      { ...product, quantity, selectedSize, selectedColor }
    ))
  }

  useEffect(() => {
    const getProducts = async () => {
      try {
        const apiName = 'acharyapropubapi';
        API.get(apiName, `/products/${productId}`).then((response) => {
          setProduct(response);
        });
      } catch (error) { }
    };
    getProducts()
  }, [productId])


  return (
    <div className={styles.product}>
      <div className={styles.left}>
        {
          product.img && (
            <div className={styles.product_imageSet}>
              {
                product.img.map((image, i) =>
                  <img src={image} alt="" className={styles.side__img} key={i} onClick={() => setSelectedImg(i)} />
                )
              }
            </div>
          )}
        {product.img && (
          <div className={styles.main_img}>
            <img
              src={product.img[selectedImg]}
              className={styles.big__img}
              alt=""
            />
          </div>
        )}
      </div>
      <div className={styles.right}>
        <div className={styles.product_info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>{product.desc}</p>
        </div>
        <span className={styles.price}>${product.discount_price}</span>
        <div className={styles.additional_details}>
          {product.size && (
            <div className={styles.additional_detail}>
              <span className={styles.option_title}>Size</span>
              <ul className={styles.select}>
                {product.size.map((s) => (
                  <li className={`${styles.selectOptions} ${selectedSize === s ? styles.selected : ''}`}
                    onClick={() => handleSize(s)} key={s}>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {product.color && (
            <div className={styles.additional_detail}>
              <span className={styles.option_title}>Color</span>
              <ul className={styles.select}>
                {product.color.map((c) => (
                  <li className={`${styles.selectOptions} ${selectedColor === c ? styles.selected : ''}`}
                    onClick={() => handleColor(c)} key={c}>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className={styles.product_purchase}>
          <div className={styles.purchase__quantity}>
            <div className={styles.quantity}>
              <RemoveIcon onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)} />
              <span className={styles.product__quantity}>{quantity}</span>
              <AddIcon onClick={() => setQuantity(prev => prev + 1)} />
            </div>
            <div className={styles.wishlist}>
              <FavoriteBorderIcon /> ADD TO WISH LIST
            </div>
          </div>
          <span className={styles.product__add} onClick={selectedColor !== '' && selectedSize !== '' ? handleCart : null}><AddShoppingCartIcon/>ADD TO CART
          </span>
        </div>
        <div className={styles.product__details}>
          <span className={styles.product__detail}>Vendor: {product.vendor}</span>
          <span className={styles.product__detail}>Category: {product.category}</span>
          <span className={styles.product__detail}>Tag: T-Shirt, Women, Top</span>
          <hr className={styles.divider} />
        </div>
      </div>
    </div>
  )
}

export default ProductPage