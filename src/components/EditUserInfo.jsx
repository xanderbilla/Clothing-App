import { useState } from 'react'
import styles from '../styles/userInfo.module.css'

const EditUserInfo = ({isEdit, setIsEdit}) => {
    const [name, setName] = useState("Vikas Singh")
    const [email, setEmail] = useState("xanderbilla@gmail.com")
    const [phone, setPhone] = useState("+91 7800818620")
    const [gender, setGender] = useState("Male")
    const [dob, setDob] = useState("1999-03-11")
    const [address, setAddress] = useState("Soldevenhalli, Bangalore")
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <tbody>
                    <tr className={styles.table_row}>
                        <th className={styles.table_head}>Name:</th>
                        <td className={styles.table_data}>
                            <input className={styles.input} value={name} type="text" onChange={(e) => { setName(e.target.value) }} />
                        </td>
                    </tr>
                    <tr className={styles.table_row}>
                        <th className={styles.table_head}>Email:</th>
                        <td className={styles.table_data}>
                            <input className={styles.input} value={email} type="email" onChange={(e) => { setEmail(e.target.value) }} />
                        </td>
                    </tr>
                    <tr className={styles.table_row}>
                        <th className={styles.table_head}>Address:</th>
                        <td className={styles.table_data}>
                            <input className={styles.input} value={address} type="text" onChange={(e) => { setAddress(e.target.value) }} />
                        </td>
                    </tr>
                    <tr className={styles.table_row}>
                        <th className={styles.table_head}>Phone:</th>
                        <td className={styles.table_data}>
                            <input className={styles.input} value={phone} type="phone" onChange={(e) => { setPhone(e.target.value) }} />
                        </td>
                    </tr>
                    <tr className={styles.table_row}>
                        <th className={styles.table_head}>Gender:</th>
                        <td className={styles.table_data}>
                            <input type="radio" id="male" name="gender" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)} />
                            <label htmlFor="male">Male</label>
                            <input type="radio" id="female" name="gender" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} />
                            <label htmlFor="female">Female</label>
                        </td>
                    </tr>
                    <tr className={styles.table_row}>
                        <th className={styles.table_head}>Date Of Birth:</th>
                        <td className={styles.table_data}>
                            <input className={styles.input} value={dob} type="date" onChange={(e) => { setDob(e.target.value) }} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className={styles.buttons}>
                <button className={styles.button}>Update</button>
                <button className={styles.button} onClick={(e) => setIsEdit(false)}>Cancel</button>
            </div>
        </div>
    )
}

export default EditUserInfo