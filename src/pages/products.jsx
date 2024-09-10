import { generateCardData } from '../utils/data.js';
import CardGrid from '../components/card-grid.jsx';

import './products.css';

const products = Array(6).fill(null).map(_ => generateCardData());

const Products = (props) => {
	return (
		<div className='products-page'>
			<section className='intro'>
				<h2>Products</h2>
				<p>Boy BASE jump paranoid j-pop voodoo god cardboard drone vehicle Chiba jeans dome alcohol wonton soup city 8-bit. </p>
			</section>
			<section className='grid'>
				<CardGrid cards={products}/>
			</section>
		</div>
	)
}

export default Products;