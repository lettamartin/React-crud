import React from 'react';
import'./Card.css';

const Card = ( { id, name, email, address, phone, mobile_phone } ) => {

	return (
		<div className='card'>
			<div className='text-box'>
				<h2>{name}</h2>
				<p>Email: {email}</p>
				<p>Address: {address}</p>
				<p>Phone: {phone}</p>
				<p>mobile_phone: {mobile_phone}</p>
			</div>
		</div>
	);
}

export default Card;