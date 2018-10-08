import React from 'react';
import './SearchBox.css';
import { Link } from 'react-router-dom';

const SearchBox = ({ searchfiled, searchChange }) => {


	return (
		<div className='col-md-12 input-box'>
		<input
			type='search' 
			placeholder='search users'
			onChange={searchChange} />
			<Link to="/Create">
				<button type="button" className="btn btn-success">
					<span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
				</button>
			</Link>
		</div>
	);
}

export default SearchBox;