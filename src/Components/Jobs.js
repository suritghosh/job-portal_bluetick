import React, { useState, useEffect } from 'react';
import styles from './Jobs.module.css'
export default function Jobs(props) {
  const [jobs, setJobs] = useState([]);
  // const [visibleJobs, setVisibleJobs] = useState(6);
  console.log(props.visibleJobs);
  useEffect(() => {
    fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
      .then(response => response.json())
      .then(jobIds => {
        const limitedJobIds = jobIds.slice(0, props.visibleJobs);
        Promise.all(limitedJobIds.map(id =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then(response => response.json())
        ))
        .then(data => setJobs(data));
      });
  }, [props.visibleJobs]);
  return (
    <div className={styles.container}>
  {jobs.map(job => (
        <div key={job.id} className={styles.content}>
          <a href={`https://hacker-news.firebaseio.com/v0/item/${job.id}.json`} target='_blank' className={styles.jobHead}>
            {job.title}
          </a>
          <div className={styles.details}>
            <span className={styles.text}>By {job.by}</span>
            <span className={styles.text}>
              {new Date(job.time * 1000).toLocaleDateString()},&nbsp;
              {new Date(job.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        </div>
      ))}
  </div>
  )
}
