export const navLinks = {
	'home': 'Home',
	'products': 'Products',
	'about': 'About',
	'contact': 'Contact Us'
}

export const buttonColors = {
	'lavender': "#B5B4D9",
	'aqua': "#9CD3D9",
	'primrose': '#E9F2A2',
	'deco': "#D0D991",
	'almond': '#F2D5CE'
}

export const products = [
	{
		id: 1,
		title: "Antibiotics",
		desc: "An antibiotic is a pharmaceutical product designed to treat bacterial infections, offering targeted microbial control to improve patient health. It is a key component in a company's portfolio, addressing a critical need for effective infection management in healthcare."
	},
	{
		id: 2,
		title: "Painkillers",
		desc: "Our painkillers provide fast and effective relief from a wide range of pain, ensuring comfort and improved quality of life for patients. As a trusted product, they form a cornerstone of our commitment to addressing everyday health challenges with reliable solutions."
	},
	{
		id: 3,
		title: "Antacids",
		desc: "Our antacids offer rapid relief from heartburn and acid indigestion, providing trusted, effective care for digestive discomfort. With proven results, they support our mission to enhance daily well-being and digestive health for our customers."	
	},
	{
		id: 4,
		title: "Anti Inflammatory",
		desc: "Our anti-inflammatory products are designed to reduce inflammation and alleviate pain, helping patients manage conditions like arthritis and injury recovery."	
	},
	{
		id: 5,
		title: "Injectibles",
		desc: "Our injectable products ensure precise and efficient delivery of medications, catering to a range of critical treatments from vaccines to chronic condition management."	
	},
	{
		id: 6,
		title: "Anti-Allergic",
		desc: "Our antihistamines provide fast-acting relief from allergy symptoms, helping patients manage seasonal and chronic allergies with ease. As a trusted solution, they support our goal of improving daily comfort and overall respiratory health."	
	}
]

export const generateCardData = () => {
	return {
		id: Math.floor( Math.random() * 100 ),
		title: 'Asthma',
		desc: 'Shoes augmented reality military-grade smart-saturation point franchise sunglasses.' 
	}
}