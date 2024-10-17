import { products } from '../utils/data.js';
import CardGrid from '../components/card-grid.jsx';

import './products.css';

// const products = Array(6).fill(null).map(_ => generateCardData());

const Products = (props) => {
	return (
		<div className='products-page'>
			<section className='intro'>
				<h2>Products</h2>
				<p>Our comprehensive range of pharmaceutical products is developed with a focus on quality, efficacy, and patient safety. From innovative therapies to trusted healthcare essentials, we are committed to improving health outcomes through cutting-edge science and rigorous standards</p>
			</section>
			<section className='grid'>
				<CardGrid cards={products}/>
			</section>
		</div>
	)
}

export default Products;