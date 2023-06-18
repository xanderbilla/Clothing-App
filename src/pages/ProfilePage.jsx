import { useState, EditUserInfo, UserInfo } from '../utils/Imports'
import styles from '../styles/profilePage.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ProfilePage = () => {
    const [isEdit, setIsEdit] = useState(false)

    return (
        <div className={styles.container}>
            <h2>My Profile</h2>
            <div className={styles.top}>
                <span className={`${styles.edit} ${isEdit && styles.edit_hide}`} onClick={(e) => { setIsEdit(true) }}>Edit Profile
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16"> <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" /> <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" /> </svg>
                </span>
            </div>
            <div className={styles.center}>
                <div className={styles.center_left}>
                    <LazyLoadImage className={styles.avatar} src="https://images.pexels.com/photos/16407235/pexels-photo-16407235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className={styles.center_right}>
                    {isEdit
                        ? <EditUserInfo isEdit={isEdit} setIsEdit={setIsEdit} />
                        : <UserInfo />
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfilePage