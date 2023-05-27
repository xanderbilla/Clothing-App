import { Link } from 'react-router-dom';
import styles from '../styles/signup.module.css';

const FormSection = ({ handleSignUp, errorMessage, setName, setUsername, setPhone, setEmail, setPassword }) => {
  return (
    <form className={styles.signup_form}>
      <span className={styles.title}>Create An Account!</span>
      <div className={styles.form_input}>
        <input
          className={styles.input}
          required
          type="text"
          placeholder="Full Name"
          autoComplete='on'
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.form_input}>
        <input
          className={styles.input}
          required
          type="text"
          placeholder="Username"
          autoComplete='on'
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className={styles.form_input}>
        <input
          className={styles.input}
          required
          type="text"
          placeholder="Phone"
          autoComplete='on'
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className={styles.form_input}>
        <input
          className={styles.input}
          required
          type="email"
          placeholder="Email Address"
          autoComplete='on'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.form_input}>
        <input
          className={styles.input}
          required
          type="password"
          placeholder="Password"
          autoComplete='on'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.help}>
        <div className={styles.remember}>
          <input type="checkbox" name="remember" />
          <span className={styles.other_info}>Remember Me</span>
        </div>
      </div>
      <button className={styles.button} type="button" onClick={handleSignUp}>
        Sign Up
      </button>
      {errorMessage && (
        <div className={styles.error}>
          <span className={styles.warning}>{errorMessage}</span>
        </div>
      )}
      <Link to='/login'>
        <button className={styles.button}>
          Sign In
        </button>
      </Link>
    </form>
  );
};

export default FormSection;
