import styles from '../styles/productPage.module.css';

const AdditionalDetails = ({ title, options, selectedOption, handleOption }) => {
  return (
    <div className={styles.additional_detail}>
      <span className={styles.option_title}>{title}</span>
      <ul className={styles.select}>
        {title !== 'Color' ? (
          options.map((option) => (
            <li
              className={`${styles.selectOptions} ${
                selectedOption === option ? styles.selected : ''
              }`}
              onClick={() => handleOption(option)}
              key={option}
            >
              {option}
            </li>
          ))
        ) : (
          options.map((option) => (
            <li
              className={`${styles.selectOptions} ${
                selectedOption === option ? styles.optionSelect : ''
              }`}
              style={{ backgroundColor: `${option}` }}
              onClick={() => handleOption(option)}
              key={option}
            ></li>
          ))
        )}
      </ul>
    </div>
  );
};

export default AdditionalDetails;
