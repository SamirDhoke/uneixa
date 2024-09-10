import {
	Link
} from 'react-router-dom';

import './about.css';

const About = (props) => {
	return (
		<article className='about-page'>
			<section>
			    <h2>About us</h2>
			    <p>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Reiciendis recusandae nesciunt nulla at iure, ullam dignissimos soluta eos accusantium repellat saepe. Voluptas praesentium eum deserunt asperiores sapiente pariatur dolor. Nobis.</p>
			</section>
			<section>
			    <h2>Who we are</h2>
			    <p>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Reiciendis recusandae nesciunt nulla at iure, ullam dignissimos soluta eos accusantium repellat saepe. Voluptas praesentium eum deserunt asperiores sapiente pariatur dolor. Nobis.</p>

			    <div className='founders-flex'>
			    	<div>
			    		<figure>
			    			<img src='https://picsum.photos/400/400' alt='person-image'/>
			    			<figcaption>
			    				Render-farm city fetishism voodoo god human shoes camera RAF apophenia otaku sprawl table. City dome cartel Chiba hotdog decay meta-vinyl BASE jump render-farm convenience store disposable human computer. Motion alcohol render-farm refrigerator Legba saturation point augmented reality post-network garage market courier towards sensory car BASE jump. 
			    			</figcaption>	
			    		</figure>
			    	</div>
			    	<div>
			    		<figure>
			    			<img src='https://picsum.photos/400/400' alt='person-image'/>
			    			<figcaption>
			    				Render-farm city fetishism voodoo god human shoes camera RAF apophenia otaku sprawl table. City dome cartel Chiba hotdog decay meta-vinyl BASE jump render-farm convenience store disposable human computer. Motion alcohol render-farm refrigerator Legba saturation point augmented reality post-network garage market courier towards sensory car BASE jump. 
			    			</figcaption>	
			    		</figure>
			    	</div>
			    </div>
			</section>
			<section>
				<h2>What we do</h2>
				<p>Tattoo render-farm faded table nodality girl Shibuya saturation point industrial grade euro-pop weathered. Tokyo post-courier savant San Francisco man chrome 8-bit-space math. Tattoo monofilament market warehouse marketing j-pop-ware motion RAF. Tokyo sunglasses corrupted DIY dead towards-ware neon Kowloon systema tattoo assassin. </p>
			</section>
  		</article>
	)
}

export default About;