import './button.css';
import {buttonColors} from '../utils/data.js';

const Button = ({children, color='aqua', styles, ...props}) => {
	return (
		<button 
			className='custom-button' 
			style={{
				...styles,
				backgroundColor: buttonColors[color] 
			}}
			{...props}
		>
			{children}
		</button>	
	)
}

export default Button;