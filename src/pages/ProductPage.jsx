import React, { useState } from 'react'
import styles from '../styles/productPage.module.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ProductPage = () => {

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
  ]
  return (
    <div className={styles.product}>
      <div className={styles.left}>
        <div className={styles.product_imageSet}>
          <img src={images[0]} alt="" className={styles.side__img} onClick={e => setSelectedImg(0)} />
          <img src={images[1]} alt="" className={styles.side__img} onClick={e => setSelectedImg(1)} />
        </div>
        <div className={styles.main_img}>
          <img src={images[selectedImg]} className={styles.big__img} alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.product_info}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptas laudantium expedita vero. Possimus dolorum accusamus explicabo, id vel, totam earum eius tenetur dignissimos minima eveniet aspernatur mollitia, fugit dolor.</p>
        </div>
        <span className={styles.price}>$ 190</span>
        <div className={styles.additional_details}>
          <div className={styles.additional_detail}>
            <span className={styles.option_title}>Size</span>
            <ul className={styles.select}>
              <li className={styles.selectOptions}>M</li>
              <li className={styles.selectOptions}>L</li>
              <li className={styles.selectOptions}>XL</li>
            </ul>
          </div>
          <div className={styles.additional_detail}>
            <span className={styles.option_title}>Color</span>
            <ul className={styles.select}>
              <li className={styles.selectOptions}>Green</li>
              <li className={styles.selectOptions}>Blue</li>
              <li className={styles.selectOptions}>White</li>
            </ul>
          </div>
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
          <span className={styles.product__add}>
            <AddShoppingCartIcon /> Add to cart
          </span>
        </div>
        <div className={styles.product__details}>
          <span className={styles.product__detail}>Vendor: Polo</span>
          <span className={styles.product__detail}>Product Type: T-Shirt</span>
          <span className={styles.product__detail}>Tag: T-Shirt, Women, Top</span>
          <hr className={styles.divider} />
          <div className={styles.product__additional_detail}>
            <div className={styles.product__add_detail}>
              <span>DESCRIPTION</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aspernatur esse nulla voluptas rerum, vel quas a iusto porro exercitationem accusantium itaque nobis saepe quaerat, tempore debitis? Esse, ut consequuntur!
              </p>
              <hr className={styles.info__divider} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage