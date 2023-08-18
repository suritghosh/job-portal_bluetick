import React, { useState } from 'react';
import Nav from './Nav';
import styles from './Home.module.css';
import Jobs from './Jobs';

export default function Home() {
  const [visibleJobs, setVisibleJobs] = useState(6);
  console.log(visibleJobs);
  const loadMoreJobs = () => {
    setVisibleJobs(prevVisibleJobs => prevVisibleJobs + 6);
  };

  return (
    <div>
      <Nav />
      <Jobs visibleJobs={visibleJobs} />
      <div className={styles.btnContainer}>
        <button className={styles.loadMoreBtn} onClick={loadMoreJobs}>
          Load more jobs
        </button>
      </div>
    </div>
  );
}
