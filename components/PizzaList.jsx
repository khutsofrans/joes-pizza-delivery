import React from 'react'
import styles from "../styles/PizzaList.module.css"
import PizzaCard from "./PizzaCard"

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Joe&apos;s Pizza offers the best pizza in town. Order from a wide range of toppings and crust options, and enjoy delicious, hot pizza delivered straight to your door. Don&apos;t settle for mediocre pizza - choose Joe&apos;s Pizza.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  )
}

export default PizzaList