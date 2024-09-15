import {
	Link
} from 'react-router-dom';

import './about.css';

const About = (props) => {
	return (
		<article className='about-page'>
			<section>
			    <h2>About us</h2>
			    <p>Uneixa Lifesciences is an innovative pharmaceutical startup dedicated to revolutionizing healthcare by developing novel, high-impact therapies for unmet medical needs. Our mission is to advance drug discovery and development using cutting-edge technology, precision medicine, and targeted delivery systems. By focusing on patient-centric solutions, we aim to bring safe, effective, and affordable treatments to market faster. With a team of leading scientists, clinicians, and industry experts, Uneixa is committed to pushing the boundaries of modern medicine to improve the quality of life for patients worldwide.</p>
			</section>
			<section>
			    <h2>Who we are</h2>
			    <p>We are group of committed professionals working to make world a better place by providing people with best in class medication with an affordable price. Our team includes experienced people from pharmaceutical background.</p>

			    <div className='founders-flex-wrapper'>
				    <div className='founders-flex'>
				    	<div>
				    		<figure>
				    			<img src='https://i.ibb.co/0Q49SpD/tanmay.jpg' alt='person-image'/>
				    			<figcaption>
				    				<p className='name'>Tanmay Mahajan</p>
				    				<p>Tanmay is a passionate entrepreneur with a solid foundation in the pharmaceutical sector, bringing years of experience from working with leading pharmaceutical companies. With a background in both the technical and business sides of the industry, he has been involved in everything from drug development to regulatory affairs, product launches, and market strategy. Driven by a desire to innovate, Tanmay founded Uneixa to address unmet needs in healthcare, combining his pharmaceutical expertise with a vision for transformative solutions that improve patient outcomes.</p>
				    			</figcaption>	
				    		</figure>
				    	</div>
				    	<div>
				    		<figure>
				    			<img src='https://i.ibb.co/VVnBBNp/mohit.jpg' alt='person-image'/>
				    			<figcaption>
				    				<p className='name'>Mohit Wardhe</p>
				    				<p>Mohit is the visionary behind Uneixa, with a strong academic foundation, holding a Master's degree in Management from a prestigious university in the United Kingdom. His education has equipped him with a comprehensive understanding of global business strategies, leadership, and innovation. During his time in the UK, Mohit developed a keen interest in entrepreneurship and honed the skills necessary to navigate the dynamic startup landscape.</p>
				    			</figcaption>	
				    		</figure>
				    	</div>
				    </div>
			    </div>
			</section>			
  		</article>
	)
}

export default About;