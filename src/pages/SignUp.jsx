import { useState, Auth, useNavigate, VerificationSection, FormSection } from '../utils/Imports';
import styles from '../styles/signup.module.css';

const SignUp = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhone] = useState('');
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
          phone_number
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
      redirect('/login');
      setUsername('');
    } catch (error) {
      console.log('Error verifying user: ', error);
      setErrorMessage('Verification code is invalid. Please try again.');
    }
  };

  return (
    <div className={styles.signup}>
      <div className={styles.wrapper}>
        {!formSubmitted && (
          <FormSection
            handleSignUp={handleSignUp}
            errorMessage={errorMessage}
            setName={setName}
            setUsername={setUsername}
            setPhone={setPhone}
            setEmail={setEmail}
            setPassword={setPassword}
          />
        )}
        {formSubmitted && (
          <VerificationSection
            handleVerification={handleVerification}
            errorMessage={errorMessage}
            setVerificationCode={setVerificationCode}
          />
        )}
      </div>
    </div>
  );
};

export default SignUp;