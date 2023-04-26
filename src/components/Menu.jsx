import styles from "../styles/menu.module.css";
import {Link} from 'react-router-dom'

export default function Menu({isOpen, setIsOpen}) {
  return (
      <div className={styles.container}>
          <div className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
      <ul className={styles.list}>
        <li className={styles.listItem} onClick={()=>setIsOpen(false)}>
          <Link className={styles.link_menu} to='/category/Men'>Men</Link>
        </li>
        <li className={styles.listItem} onClick={()=>setIsOpen(false)}>
          <Link className={styles.link_menu} to='/category/Women'>Women</Link>
        </li>
        <li className={styles.listItem} onClick={()=>setIsOpen(false)}>
          <Link className={styles.link_menu} to='/category/Kids'>Kids</Link>
        </li>
        <li className={styles.listItem} onClick={()=>setIsOpen(false)}>
          <Link className={styles.link_menu} to='/category/Accessories'>Accessories</Link>
        </li>
        <li className={styles.listItem} onClick={()=>setIsOpen(false)}>
          <Link className={styles.link_menu} to='/my-profile'>My Profile</Link>
        </li>
        <li className={styles.listItem} onClick={()=>setIsOpen(false)}>
          <Link className={styles.link_menu} to='/signin'>Login</Link>
        </li>
        <li className={styles.listItem} onClick={()=>setIsOpen(false)}>
          <Link className={styles.link_menu} to='/signup'>Register</Link>
        </li>
      </ul>
    </div>
    </div>
  );
}