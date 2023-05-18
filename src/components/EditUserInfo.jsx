import { useEffect, useState } from 'react'
import styles from '../styles/userInfo.module.css'
import { Auth } from 'aws-amplify';

const EditUserInfo = ({ isEdit, setIsEdit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
  
    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const user = await Auth.currentAuthenticatedUser();
            setName(user.attributes.name || '');
            setEmail(user.attributes.email || '');
            setPhone(user.attributes.phone_number || '');
            setGender(user.attributes['custom:gender'] || '');
            setDob(user.attributes['custom:dob'] || '');
            setAddress(user.attributes['custom:address'] || '');
          } catch (error) {
            console.log('Error fetching user data:', error);
          }
        };
    
        fetchUserData();
      }, []);

    const updateUserAttributes = async () => {
        try {
          const user = await Auth.currentAuthenticatedUser();
          await Auth.updateUserAttributes(user, {
            name: name,
            email: email,
            phone_number: phone,
            'custom:gender': gender,
            'custom:dob': dob,
            'custom:address': address
          });
          setIsEdit(false);
        } catch (error) {
          console.log('Error updating user attributes:', error);
        }
      };
      

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
                <button className={styles.button} onClick={updateUserAttributes}>Update</button>
                <button className={styles.button} onClick={(e) => setIsEdit(false)}>Cancel</button>
            </div>
        </div>
    )
}

export default EditUserInfo
