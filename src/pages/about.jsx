import {
	Link
} from 'react-router-dom';

import './about.css';

const About = (props) => {
	return (
		<article className='about-page'>
			<section>
			    <h2>About us</h2>
			    <p>At Uneixa Lifesciences, we are dedicated to advancing healthcare through innovative, high-quality pharmaceutical products. As a fully integrated pharmaceutical company, we take pride in developing, manufacturing, and delivering a broad portfolio of medicines that address critical health challenges.</p>
			</section>
			<section>
			    <h2>Who we are</h2>
			    <p>We are group of committed professionals working to make world a better place by providing people with best in class medication with an affordable price. Our team includes experienced people from pharmaceutical background.</p>			   
			</section>
					
			<section>
			    <h2>Our Mission and Vison</h2>
			    <p>Our mission is to improve the quality of life for patients by providing safe, effective, and affordable medications. From research and development to production and distribution, we maintain the highest standards of excellence in everything we do. We are committed to driving innovation while ensuring our products meet the most rigorous regulatory and safety requirements.</p>			   
				<p>Our vision is to become a global leader in pharmaceutical innovation, known for our commitment to patient care and the positive impact we have on global health. We strive to deliver life-changing treatments to patients around the world, one breakthrough at a time.</p>
			</section>
			
					
  		</article>
	)
}

export default About;