import React from 'react'
import styles from '../styles/newsletter.module.css'
import SendIcon from '@mui/icons-material/Send';

const Newsletter = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.container_title}>Newsletter</h1>
            <span className={styles.container_desc}>Get timely updates from your favourite products.</span>
            <div className={styles.container_input}>
                <input className={styles.input} placeholder='Your Email' type="text" />
                <SendIcon className={styles.button} />
            </div>
        </div>
    )
}

export default Newsletter