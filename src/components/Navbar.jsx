import styles from '../styles/navbar.module.css'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import { Auth } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Search from './Search';

const Navbar = ({ isOpen, setIsOpen, }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const quantity = useSelector(state => state.cart.quantity)
    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            await Auth.currentAuthenticatedUser();
            setIsLoggedIn(true);
        } catch (error) {
            setIsLoggedIn(false);
        }
    };

    const handleClick = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.classList.add(styles.noScroll);
        } else {
            document.body.classList.remove(styles.noScroll);
        }
    };

    const logoutHandler = async () => {
        try {
            await Auth.signOut();
            console.log('User signed out');
            window.location.replace('/');
            setIsLoggedIn(false);
        } catch (error) {
            console.log('Error signing out: ', error);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.toggleButton}>
                    <div className={styles.hamburger} onClick={handleClick}>
                        <span className={`${styles.lines} ${isOpen ? styles.open : ''}`}></span>
                        <span className={`${styles.lines} ${isOpen ? styles.hide : ''}`}></span>
                        <span className={`${styles.lines} ${isOpen ? styles.close : ''}`}></span>
                    </div>
                </div>
                <ShoppingCartOutlinedIcon color="black" />
                <div className={styles.left}>
                    <Link to='/' className={styles.link}><img src="https://i.imgur.com/S5awLwi.png" alt="" height="40px" /></Link>
                </div>
                <div className={styles.center}>
                    <Search />
                </div>
                <div className={styles.right}>
                    <Link to='/orders' className={styles.orders}>My Orders</Link>
                    <div className={styles.menu_item}>
                        <Link style={{ textDecoration: "none", color: "inherit" }} to='/cart'>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlinedIcon color="black" />
                            </Badge>
                        </Link>
                    </div>
                    {isLoggedIn ? (
                        <>
                            <Link to='/profile' className={styles.menu_profile}><AccountCircleOutlinedIcon fontSize='large' /></Link>
                            <span className={styles.menu_auth} onClick={logoutHandler}>LOGOUT</span>
                        </>
                    ) : (
                        <>
                            <Link to='/register' className={styles.menu_auth}>REGISTER</Link>
                            <Link to='/login' className={styles.menu_auth}>SIGN IN</Link>
                        </>
                    )}
                </div>
            </div>
            <div className={styles.menuContainer}>
                <Menu isOpen={!isOpen} setIsOpen={setIsOpen} />
            </div>
        </div>
    )
}

export default Navbar;
