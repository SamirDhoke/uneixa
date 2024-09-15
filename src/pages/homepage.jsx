import {
	Link
} from 'react-router-dom';

import Hero from '../components/hero.jsx';
import Card from '../components/card.jsx'
import CardSmall from '../components/card-small.jsx'
import CardStack from '../components/card-stack.jsx';
import CardGrid from '../components/card-grid.jsx'

import { products as allProducts } from '../utils/data.js';

import './homepage.css'

const products = allProducts.slice(0, 2);

const Homepage = (props) => {
	return (
		<article className='home-page'>
		    <section>
	        	<Hero/>
	        </section>
	        <section>
	        	<CardStack/>
	        </section>
	        <section className='products-list-small'>	            
             	<div>                              
                	<h2>Products</h2>
                	<CardGrid cards={products}/>
                	<Link to='/products'>Show All</Link>
              	</div>
	  		</section>
  		</article>
	)
}

export default Homepage;