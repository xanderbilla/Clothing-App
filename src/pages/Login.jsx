import {useState, Link, Auth} from '../utils/Imports'
import styles from '../styles/login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await Auth.signIn(username, password);
      window.location.replace('/');
      console.log(user);
    } catch (error) {
      console.log('error signing in', error);
      setErrorMessage('Invalid Credentials')
    }
  };

/*
  const handleLogin = () => {
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
  }
*/
  return (
    <div className={styles.signup}>
      <div className={styles.wrapper}>
        <form className={styles.signup_form}>
          <span className={styles.title}>Login Your Account!</span>
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
            {/* <div className={styles.forgot_passwd">
              <span className={styles.other_info'>Forgot Password?</span>
            </div> */}
          </div>
          <button className={styles.button} type="button" onClick={handleLogin}>
            Sign In
          </button>
          {errorMessage && (
            <div className={styles.error}>
              <span className={styles.warning}>{errorMessage}</span>
            </div>
          )}
          <Link to='/register'>
            <button className={styles.button}>
              Sign Up
            </button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login