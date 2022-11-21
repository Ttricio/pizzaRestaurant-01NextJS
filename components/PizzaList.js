import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"



const pizzas = [
	{
        id: 1,
		title: "Capriciosa",
		img: "/img/pizza.png",
		desc: "Best and delicous",
		prices: [12, 13, 14],
		extraOptions: [
			{
				text: "Garlic sauce",
				price: 2,
			},
		],
	},
	{
        id: 2,
		title: "Marinara",
		img: "/img/pizza.png",
		desc: "With garlic",
		prices: [12, 13, 14],
		extraOptions: [
			{
				text: "Garlic sauce",
				price: 2,
			},
		],
	},
	{
        id: 3,
		title: "Roamana",
		img: "/img/pizza.png",
		desc: "lorem    ",
		prices: [12, 13, 14],
		extraOptions: [
			{
				text: "Garlic sauce",
				price: 2,
			},
		],
	},
	{
        id: 4,
		title: "Italiana",
		img: "/img/pizza.png",
		desc: "lorem sajksansa sajsak as   ",
		prices: [12, 13, 14],
		extraOptions: [
			{
				text: "Garlic sauce",
				price: 2,
			},
		],
	},
	{
        id: 4,
		title: "Al Forno",
		img: "/img/pizza.png",
		desc: "lorem sajksansa sajsak as   ",
		prices: [12, 13, 14],
		extraOptions: [
			{
				text: "Garlic sauce",
				price: 2,
			},
		],
	},
	{
        id: 6,
		title: "Fior di latte",
		img: "/img/pizza.png",
		desc: "lorem sajksansa sajsak as   ",
		prices: [12, 13, 14],
		extraOptions: [
			{
				text: "Garlic sauce",
				price: 2,
			},
		],
	},
];

const PizzaList = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        
       {pizzas.map((pizza)=>(

         <PizzaCard pizza={pizza} key={pizza.id}/>
         )
       )}
          
      </div>
    </div>
  );
};

export default PizzaList;