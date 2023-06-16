import styles from "../styles/menu.module.css";
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';

export default function Menu({ isOpen, setIsOpen }) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const logoutHandler = async () => {
    try {
      await Auth.signOut();
      console.log('User signed out');
      setIsLogin(false);
      window.location.replace('/');
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  };

  const checkAuth = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setIsLogin(true);
    } catch (error) {
      setIsLogin(false);
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
        <div className={`${styles.icons} ${isLogin ? styles.hide : ''}`}>
          <Link to='/register' className={styles.menu_auth} onClick={() => setIsOpen(false)}>REGISTER</Link>
          <Link to='/login' className={styles.menu_auth} onClick={() => setIsOpen(false)}>SIGN IN</Link>
        </div>
        <ul className={styles.list}>
          <li className={styles.listItem} onClick={() => setIsOpen(false)}>
            <Link className={styles.link_menu} to='/'>Home</Link>
          </li>
          <li className={styles.listItem} onClick={() => setIsOpen(false)}>
            <Link className={styles.link_menu} to='/category/Men'>Men</Link>
          </li>
          <li className={styles.listItem} onClick={() => setIsOpen(false)}>
            <Link className={styles.link_menu} to='/category/Women'>Women</Link>
          </li>
          <li className={styles.listItem} onClick={() => setIsOpen(false)}>
            <Link className={styles.link_menu} to='/category/Kids'>Kids</Link>
          </li>
          <li className={styles.listItem} onClick={() => setIsOpen(false)}>
            <Link className={styles.link_menu} to='/category/Accessories'>Accessories</Link>
          </li>
          <li className={styles.listItem} onClick={() => setIsOpen(false)}>
            <Link className={styles.link_menu} to='/orders'>My Orders</Link>
          </li>
        </ul>
        <div className={`${styles.icons} ${!isLogin ? styles.hide : ''}`}>
          <span className={styles.menu_auth} onClick={logoutHandler}>LOGOUT</span>
        </div>
      </div>
    </div>
  );
}