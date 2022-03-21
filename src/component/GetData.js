import React, { useEffect, useState } from 'react';
import DisplayData from './DisplayData';

const GetData = () => {
	const [meal, setMeal] = useState([]);
	useEffect(() => {
		fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Fish')
			.then(response => response.json())
			.then(data => setMeal(data.meals));
	});

	return (
		<div className='m-5'>
			<div className='container '>
				{/* search field */}
				<div class='input-group mb-3'>
					<input id='searchLipon' type='text' class='form-control' placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby='basic-addon2' />
					<div class='input-group-append'>
						<button class='input-group-text' id='basic-addon2'>
							Search
						</button>
					</div>
				</div>
				<div className='row'>
					{meal.map((m, key) => (
						<div key={key} className='col-md-4'>
							// <h1>{m.strArea}</h1>
							<DisplayData name={m.strArea} catago={m.strCategory} imgThumb={m.strMealThumb}></DisplayData>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default GetData;
