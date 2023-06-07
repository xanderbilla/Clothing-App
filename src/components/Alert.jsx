import { useState, useEffect } from 'react';
import styles from '../styles/alert.module.css';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export const SuccessAlert = ({ message}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
        setVisible(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return visible ? (
    <div className={styles.alert}><TaskAltIcon/> {message}</div>
  ) : null;
};

export const ErrorAlert = ({ message }) => {
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
          setVisible(false);
      }, 2000);
  
      return () => {
        clearTimeout(timeout);
      };
    }, []);
  
    return visible ? (
      <div className={styles.alert}><ErrorOutlineIcon/> {message}</div>
    ) : null;
  };
