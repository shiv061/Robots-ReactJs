import React from 'react';

const SearchBox = ({searchchange}) =>	{
	return (
		<div className='pa2'>
			<input className='pa3 ba b--blue bg-lightest-blue' type='search' placeholder='Search...' onChange={searchchange} />
		</div>
	);
}

export default SearchBox;