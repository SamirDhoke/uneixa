import { useState } from 'react';

import './form.css';


const Form = ({ children, ...props }) => {
	
	const handleSubmit = e => {
		e.preventDefault();
		console.log(e.target);
	}

	return (
		<form className='form-styled' onSubmit={handleSubmit}>
			{children}
		</form>
	)
}

Form.Input = ({ name, value, type, handleChange, ...props }) => {
	return (
		<div className='input-styled'>
			<input
				name={name}
				value={value}
				type={type}
				onChange={handleChange}
				{...props}
			/>
		</div>
	)
}

Form.Textarea = ({ name, value, handleChange, ...props }) => {
	return (
		<div className='textarea-styled'>
			<textarea				
				name={name}
				value={value}
				onChange={handleChange}
				{...props}
			></textarea>
		</div>
	)
}

export default Form;