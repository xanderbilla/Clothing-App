import DataTable from '../components/DataTable'
import styles from '../styles/profilePage.module.css'

const ProfilePage = () => {
    return (
        <div className={styles.container}>
            <h2>My Profile</h2>
            <div className={styles.top}>
                <span className={styles.edit}>Edit Profile
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16"> <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" /> <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" /> </svg>
                </span>
            </div>
            <div className={styles.center}>
                <div className={styles.center_left}>
                    <img className={styles.avatar} src="https://images.pexels.com/photos/16407235/pexels-photo-16407235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className={styles.center_right}>
                    <table className={styles.table}>
                        <tbody>
                            <tr className={styles.table_row}>
                                <th className={styles.table_head}>Name:</th>
                                <td className={styles.table_data}>User</td>
                            </tr>
                            <tr className={styles.table_row}>
                                <th className={styles.table_head}>Email:</th>
                                <td className={styles.table_data}>user@email.com</td>
                            </tr>
                            <tr className={styles.table_row}>
                                <th className={styles.table_head}>Address:</th>
                                <td className={styles.table_data}>Strada Vulcan 59, Brașov, România</td>
                            </tr>
                            <tr className={styles.table_row}>
                                <th className={styles.table_head}>Phone:</th>
                                <td className={styles.table_data}>+40 123 456 7890</td>
                            </tr>
                            <tr className={styles.table_row}>
                                <th className={styles.table_head}>Gender:</th>
                                <td className={styles.table_data}>Male</td>
                            </tr>
                            <tr className={styles.table_row}>
                                <th className={styles.table_head}>Date Of Birth:</th>
                                <td className={styles.table_data}>March 24, 1995</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={styles.bottom}>
                <span className={styles.profile_order_title}>My Orders</span>
                <DataTable />
            </div>
        </div>
    )
}

export default ProfilePage