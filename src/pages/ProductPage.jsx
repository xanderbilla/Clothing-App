import { useState, useEffect, useLocation, API, useDispatch, addProduct, ProductInfo, AdditionalDetails, MainImage, ProductImages, QuantityControls, AddShoppingCartIcon } from '../utils/Imports';
import styles from '../styles/productPage.module.css';
import { getImage } from '../utils/getImage';

const ProductPage = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const productId = location.pathname.split('/')[2];
  const [product, setProduct] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const dispatch = useDispatch();
  const [imageUrls, setImageUrls] = useState([]);
  
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
    const getProducts = async () => {
      try {
        const apiName = 'eCommerceApi';
        API.get(apiName, `/products/${productId}`).then(async (response) => {
          setProduct(response);
        });
      } catch (error) { }
    };
    getProducts();
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
            <span
              className={styles.product__add}
              onClick={handleCart}
            >
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
    </div>
  );
};

export default ProductPage;
