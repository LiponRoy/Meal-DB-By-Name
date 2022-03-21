import React from 'react';

const DisplayData = ({ name, catago, imgThumb }) => {
	return (
		<div>
			<h4>{name}</h4>
			<h4>{catago}</h4>
			<img src={imgThumb} alt='no img found' width='400px' />
		</div>
	);
};

export default DisplayData;
