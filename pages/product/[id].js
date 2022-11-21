import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from 'next/router'


const Product = () => {

	  
	const [size, setSize] = useState(0);
	const router = useRouter()
	const {id} = router.query
	const pizza = {
		id: 1,
		img: "/img/pizza.png",
		name: "CAMPAGNOLA",
		price: [19.9, 23.9, 27.9],
		desc: "Pizza with tomato sauce and mashrooms",
	};
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<div className={styles.imgContainer}>
					<Image
						src={pizza.img}
						alt='pizza'
						layout='fill'
						objectFit='contain'
					/>
				</div>
			</div>
			<div className={styles.right}>
				<h1 className={styles.title}>{id}</h1>
				<span className={styles.price}>${pizza.price[size]}</span>
				<p className={styles.desc}>{pizza.desc}</p>
				<h3 className={styles.choose}>Choose a size</h3>
				<div className={styles.sizes}>
					<div className={styles.size} onClick={() => setSize(0)}>
						<Image
							src='/img/size.png'
							alt='pizza icon choose a size'
							layout='fill'
						/>
						<span className={styles.number}>Small</span>
					</div>
					<div className={styles.size} onClick={() => setSize(1)}>
						<Image
							src='/img/size.png'
							alt='pizza icon choose a size'
							layout='fill'
						/>
						<span className={styles.number}>Medium</span>
					</div>
					<div className={styles.size} onClick={() => setSize(2)}>
						<Image
							src='/img/size.png'
							alt='pizza icon choose a size'
							layout='fill'
						/>
						<span className={styles.number}>Large</span>
					</div>
				</div>
				<h3 className={styles.choose}>Choose additional ingredients</h3>
				<div className={styles.ingredients}>
					<div className={styles.option}>
						<input type='checkbox' id='double' name='double' />
                        <label htmlFor="double">Double ingredients</label>
					</div>
					<div className={styles.option}>
						<input type='checkbox' id='cheese' name='cheese' />
                        <label htmlFor="cheese">Extra Cheese </label>
					</div>
					<div className={styles.option}>
						<input type='checkbox' id='spicy' name='spicy' />
                        <label htmlFor="spicy">Spicy sauce</label>
					</div>
					<div className={styles.option}>
						<input type='checkbox' id='garlic' name='garlic' />
                        <label htmlFor="garlic">Garlic sauce</label>
					</div>
				</div>
                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quantity}/>
                    <button className={styles.button}>Add to cart</button>
                </div>
			</div>
		</div>
	);
};

export default Product;
