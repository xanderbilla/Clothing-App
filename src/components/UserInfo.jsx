import { useState } from 'react'
import styles from '../styles/userInfo.module.css'
import { Auth } from 'aws-amplify'

const UserInfo = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [gender, setGender] = useState("")
    const [dob, setDob] = useState("")
    const [address, setAddress] = useState("")
    const logCurrentUser = async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            setName(user.attributes.name)
            setEmail(user.attributes.email)
            setPhone(user.attributes.phone_number)
            setGender(user.attributes['custom:gender']);
            setDob(user.attributes['custom:dob']);
            setAddress(user.attributes['custom:address']);
        } catch (error) {
            console.log('Error getting current user: ', error);
        }
    }

    logCurrentUser()
    return (
        <table className={styles.table}>
            <tbody>
                <tr className={styles.table_row}>
                    <th className={styles.table_head}>Name:</th>
                    <td className={styles.table_data}>{name}</td>
                </tr>
                <tr className={styles.table_row}>
                    <th className={styles.table_head}>Email:</th>
                    <td className={styles.table_data}>{email}</td>
                </tr>
                <tr className={styles.table_row}>
                    <th className={styles.table_head}>Address:</th>
                    <td className={styles.table_data}>{address}</td>
                </tr>
                <tr className={styles.table_row}>
                    <th className={styles.table_head}>Phone:</th>
                    <td className={styles.table_data}>{phone}</td>
                </tr>
                <tr className={styles.table_row}>
                    <th className={styles.table_head}>Gender:</th>
                    <td className={styles.table_data}>{gender}</td>
                </tr>
                <tr className={styles.table_row}>
                    <th className={styles.table_head}>Date Of Birth:</th>
                    <td className={styles.table_data}>{dob}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default UserInfo