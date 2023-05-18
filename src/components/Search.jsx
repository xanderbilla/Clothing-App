import React, { useState } from 'react'
import styles from '../styles/search.module.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Search = () => {
  const [query, setQuery] = useState('')
  // console.log(query);
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <div className={styles.search__container}>
          <SearchOutlinedIcon style={{ color: "gray", fontSize: 25 }} />
          <input type="search" name="" id="" placeholder='Search...' onChange={(e) => setQuery(e.target.value)} className={styles.search__input} />
        </div>
        {/* <ul className={styles.search__result}>
          {query &&
            info.filter((item) => item.first_name.toLowerCase().includes(query)).slice(0, 4).map((item) =>
              <li key={item.id} className={styles.search__item}>{item.first_name}</li>
            )
          }
        </ul> */}
      </div>
    </div>
  )
}

export default Search