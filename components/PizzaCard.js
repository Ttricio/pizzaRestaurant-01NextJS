import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import  Link  from "next/link";

const PizzaCard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.top__container}>

      <Link href={`/product/${props.pizza.id}`}>
      <Image src={props.pizza.img} alt="" width="200" height="200" />
      </Link>
      <h1 className={styles.title}>{props.pizza.title}</h1>
      <span className={styles.price}>${props.pizza.prices[0]}</span>
      </div>
      <div className={styles.bottom__container}>

       

      <p className={styles.desc}>
        {props.pizza.desc}
      </p>
      </div>
      
    </div>
  );
};

export default PizzaCard;