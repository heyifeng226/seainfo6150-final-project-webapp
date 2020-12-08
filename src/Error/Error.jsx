import React from 'react'
import styles from "./Error.module.css"

const Error = () => {
    return (
    <div className={styles.error}>
      <section className={styles.errorContainer}>
        <h1>Oops Sorry!</h1>
        <p>It seems that something went wrong :(</p>
        <img src="https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png" alt="error" />
      </section>
    </div>
    )
}

export default Error
