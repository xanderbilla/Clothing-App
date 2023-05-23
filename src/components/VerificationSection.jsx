import styles from '../styles/signup.module.css';

const VerificationSection = ({ handleVerification, errorMessage, setVerificationCode }) => {
  return (
    <form className={styles.verify_form}>
      <span className={styles.title}>Verify Your Account!</span>
      <div className={styles.form_input}>
        <span className={styles.desc}>Enter 6-digit code sent on your Email Address</span>
        <input
          className={styles.input}
          required
          type="number"
          placeholder="code"
          onChange={(e) => setVerificationCode(e.target.value)}
        />
      </div>
      <button className={styles.button} type="button" onClick={handleVerification}>
        Verify
      </button>
      {errorMessage && (
        <div className={styles.error}>
          <span className={styles.warning}>{errorMessage}</span>
        </div>
      )}
    </form>
  );
};

export default VerificationSection;
