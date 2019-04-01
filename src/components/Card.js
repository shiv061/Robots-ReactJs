import React from 'react';

const Card = (props) =>	{
	return (
		<div className='tc bg-light-red dib pa3 br2 ma3 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${props.id}?200x200`} />
			<div>
				<h2>{props.name}</h2>
				<h4>{props.email}</h4>
			</div>

		</div>);
}

export default Card;