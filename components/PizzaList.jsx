import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenido a hamburrr</h1>
      <p className={styles.desc}>
        Hamburrr satisfará tu hambre y hará que quieras volver por más. Tenemos una amplia variedad de hamburguesas especiales para cualquier estado de ánimo
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza)=> (
          <PizzaCard key={pizza._id} pizza={pizza}/>
        ))}
         
      </div>
    </div>
  );
};

export default PizzaList;