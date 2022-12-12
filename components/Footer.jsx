import React from 'react'
import Image from 'next/image';
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit='cover' layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID. JOE&apos;S PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>
            FIND OUR RESTAURANTS
          </h1>
          <p className={styles.text}>
            1456 R. Ave Road #304.
            <br /> Polokwane, 0700
            <br /> (074) 678-1234
          </p>
          <p className={styles.text}>
            1456 R. Ave Road #304.
            <br /> Polokwane, 0700
            <br /> (074) 678-1234
          </p>
          <p className={styles.text}>
            1456 R. Ave Road #304.
            <br /> Polokwane, 0700
            <br /> (074) 678-1234
          </p>
          <p className={styles.text}>
            1456 R. Ave Road #304.
            <br /> Polokwane, 0700
            <br /> (074) 678-1234
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>
            WORKING HOURS
          </h1>
          <p className={styles.text}>
            MONDAY TO FRIDAY
            <br /> 9:00 - 21:00
          </p>
          <p className={styles.text}>
            SATURDAY TO SUNDAY
            <br /> 12:00 - 23:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer