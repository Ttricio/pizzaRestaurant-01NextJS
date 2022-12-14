import Layout from "../components/Layout";
import "../styles/globals.css";


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

function MyApp({ Component, pageProps }) {
	return (
		<Layout >
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
