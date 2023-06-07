import React, { useState } from 'react';
import styles from '../styles/slider.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { sliderItems } from '../static/data';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.arrow} onClick={() => handleClick('left')}>
        <ArrowLeftOutlinedIcon />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * slideIndex}vw)` }}
      >
        {sliderItems.map((item) => (
          <div
            className={styles.slide}
            style={{ backgroundColor: `#${item.bg}` }}
            key={item.id}
          >
            <div className={styles.container__img}>
              <LazyLoadImage
                className={styles.image}
                src={item.img}
                alt=""
                effect="blur"
              />
            </div>
            <div className={styles.container_info}>
              <h1 className={styles.slide_title}>{item.title}</h1>
              <p className={styles.slide_desc}>{item.desc}</p>
              <button className={styles.slide_button}>SHOP NOW</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.arrow} onClick={() => handleClick('right')}>
        <ArrowRightOutlinedIcon />
      </div>
    </div>
  );
};

export default Slider;
