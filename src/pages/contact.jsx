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
			    <p>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Reiciendis recusandae nesciunt nulla at iure, ullam dignissimos soluta eos accusantium repellat saepe. Voluptas praesentium eum deserunt asperiores sapiente pariatur dolor. Nobis.</p>
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
					<p>Lorem ipsum dolor sit, amet consectetur</p>
					<p>adipisicing, elit.</p>
					<p>Cupiditate accusamus, 431-445</p>
					<p>Office Phone : 020-323-121-2323</p>
				</div>
			</section>
  		</article>
	)
}

export default Contact;