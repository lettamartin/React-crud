import React from 'react';
import Card from './Card';
import './Usercard.css'

const CardList = ({ users }) => {
	return (
		<div className='col-md-12 card-container'>
		{
			users.map((user, i) => {
				return (
					<Card 
						key={user.id} 
						id={users[i].id} 
						name={users[i].name} 
						email={users[i].email}
						address={users[i].address}
						phone={users[i].phone}
						mobile_phone={users[i].mobile_phone}
					/>
				);
			})
		}
		</div>
	);
}

export default CardList;


