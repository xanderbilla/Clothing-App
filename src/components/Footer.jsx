import React from 'react'
import styles from '../styles/footer.module.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container_left}>
                <img src="https://i.imgur.com/yfCcLf5.png" alt="" height="40px" width="160px" />
                <p className={styles.container_desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi odit ipsa, sequi deleniti adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, obcaecati!</p>
                <div className={styles.container_social}>
                    <div className={styles.container_social_icon}>
                        <FacebookOutlinedIcon />
                    </div>
                    <div className={styles.container_social_icon}>
                        <PinterestIcon />
                    </div>
                    <div className={styles.container_social_icon}>
                        <TelegramIcon />
                    </div>
                    <div className={styles.container_social_icon}>
                        <TwitterIcon />
                    </div>
                </div>
            </div>
            <div className={styles.container_center}>
                <h3 className={styles.container_title}>Useful Links</h3>
                <ul className={styles.container_list}>
                    <li className={styles.container_listItem}>Home</li>
                    <li className={styles.container_listItem}>Categories</li>
                    <li className={styles.container_listItem}>Other Websites</li>
                    <li className={styles.container_listItem}>Cart</li>
                    <li className={styles.container_listItem}>Order Tracking</li>
                    <li className={styles.container_listItem}>Wishlist</li>
                    <li className={styles.container_listItem}>Terms</li>
                    <li className={styles.container_listItem}>Contact Us</li>
                </ul>
            </div>
            <div className={styles.container_right}>
                <h3 className={styles.container_title}>Contact</h3>
                <div className={styles.container_contact}><LocationOnIcon style={{ marginRight: '10px' }} />
                    Strada Vulcan 59, Brașov, România
                </div>
                <div className={styles.container_contact}><LocalPhoneIcon style={{ marginRight: '10px' }} />
                    +40 123 456 7890
                </div>
                <div className={styles.container_contact}><EmailIcon style={{ marginRight: '10px' }} />
                    laila@email.com
                </div>
                <img className={styles.container_payment} src="https://i.imgur.com/iRvqTEm.png" alt="" />
            </div>
        </div>
    )
}

export default Footer