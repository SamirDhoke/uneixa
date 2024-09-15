import {
	Link
} from 'react-router-dom';

import './contact.css';

import Button from '../components/button.jsx';
import Form from '../components/form.jsx';

const Contact = (props) => {
	return (
		<article className='contact-page'>
			<section>
			    <h2>Contact us</h2>
			    <p>We'd love to hear from you! For inquiries, support, or to learn more about our products and services, please reach out to us through the contact form below or use the information provided. Our team is here to assist you and will respond as promptly as possible.</p>
			</section>
			<section className='contact-flex'>
				<div className='contact-form'>
					<Form>
						<Form.Input placeholder='your name'/>
						<Form.Input placeholder='your email' type='email'/>
						<Form.Textarea placeholder='your message'/>
						<Button type='submit' styles={{ width: '100%' }}>Submit</Button>
					</Form>
				</div>
				<div className='office-addr'>
					<h4>Office location</h4>
					<p>Uneixa Lifesciences Pvt. Ltd.</p>
					<p>Flat No. A302, Jhulelal Tower</p>
					<p>Near SP Lawns, Aundh, Pune - 411027</p>
					<p>Office Phone : +91-7709578229</p>
				</div>
			</section>
  		</article>
	)
}

export default Contact;