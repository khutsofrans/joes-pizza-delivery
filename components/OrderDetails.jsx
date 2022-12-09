import React from 'react'
import styles from "../styles/OrderDetails.module.css"
import { useState } from 'react';

const OrderDetails = ({ total, createOrder }) => {
    const [customer, setCustomer] = useState("");
    const [address, setAddress] = useState("");

    const handleClick = () => {
        createOrder({ customer, address, total, method: 0 });
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>You will pay $12 after delivery.</h1>
                <div className={styles.item}>
                    <label className={styles.label}>Name Surname</label>
                    <input placeholder="John Doe" type="text" className={styles.input} onChange={(e) => setCustomer(e.target.value)} />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Phone Number</label>
                    <input placeholder="+27 12 345 6789" type="text" className={styles.input} />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Address</label>
                    <textarea rows={5} placeholder="Sekhukhune St. 655 PLK" type="text" className={styles.textarea} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <button className={styles.button} onClick={handleClick}>Order</button>
            </div>
        </div>
    )
}

export default OrderDetails