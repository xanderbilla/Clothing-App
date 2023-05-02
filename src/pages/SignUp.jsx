import { useState } from 'react';
import { Auth } from 'aws-amplify';
import styles from '../styles/signup.module.css';
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const redirect = useNavigate();

  const handleSignUp = async () => {
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          name,
        },
      });
      setFormSubmitted(true);
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log('Error signing up: ', error);
      if (error.code === 'UsernameExistsException') {
        setErrorMessage('Username already exists!');
      } else {
        setErrorMessage('Something Went Wrong');
      }
    }
  };

  const handleVerification = async () => {
    try {
      await Auth.confirmSignUp(username, verificationCode);
      redirect('/login')
      setUsername('');
    } catch (error) {
      console.log('Error verifying user: ', error);
      setErrorMessage('Verification code is invalid. Please try again.');
    }
  };

  /*
  const handleSignUp = () => {
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    console.log(`Email: ${email}`);
    console.log(`Name: ${name}`);
  }
  */

  return (
    <div className={styles.signup}>
      <div className={styles.wrapper}>
        {!formSubmitted && (
          <form className={styles.signup_form}>
            <span className={styles.title}>Create An Account!</span>
            <div className={styles.form_input}>
              <input
                className={styles.input}
                required
                type="text"
                placeholder="Full Name"
                autoComplete='on'
                value={name}
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className={styles.form_input}>
              <input
                className={styles.input}
                required
                type="email"
                placeholder="Email Address"
                autoComplete='on'
                value={email}
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
                value={password}
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
        )}
        {formSubmitted && (
          <form className={styles.verify_form}>
            <span className={styles.title}>Verify Your Account!</span>
            <div className={styles.form_input}>
              <span className={styles.desc}>Enter 6-digit code sent on your Email Address</span>
              <input
                className={styles.input}
                required
                type="number"
                placeholder="code"
                value={verificationCode}
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
        )}
      </div>
    </div>
  );
};

export default SignUp;
