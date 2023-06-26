import React, { useEffect, useState } from 'react';
import styles from '../styles/search.module.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { API } from 'aws-amplify';
import { Link } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const [info, setInfo] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const apiName = 'eCommerceApi';
        const response = await API.get(apiName, `/products`);
        setInfo(response);
      } catch (error) {}
    };
    getProducts();
  }, []);

  useEffect(() => {
    const searchItems = () => {
      const filteredItems = info.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredItems);
    };

    searchItems();
  }, [query, info]);

  const handleLinkClick = () => {
    setQuery('');
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <div className={styles.search__container}>
          <SearchOutlinedIcon style={{ color: 'gray', fontSize: 25 }} />
          <input
            type="search"
            name=""
            id=""
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            className={styles.search__input}
          />
        </div>
        <ul className={styles.search__result}>
          {query &&
            searchResults
              .slice(0, 4)
              .map((item) => (
                <Link
                  key={item.prodId}
                  to={`/product/${item.prodId}`}
                  className={styles.link}
                  onClick={handleLinkClick}
                >
                  <li className={styles.search__item}>{item.title}</li>
                </Link>
              ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
