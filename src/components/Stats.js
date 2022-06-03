import React from 'react';

function Stats({ data }) {
	if (data && data.length <= 0) {
		return <div>No stats</div>;
	}

	const TotalAmount = data
		.map((item) => item.price)
		.reduce(function (result, item) {
			return result + item;
		}, 0);

	const SoldItems = data.filter((item) => item.sold);
	const NotSoldItems = data.filter((item) => !item.sold);
	return (
		<div className='p-3'>
			<h3>Stats</h3>
			<p>
				Total Sales Amount of Selected Month :{' '}
				<strong>{Math.round(TotalAmount)}</strong>
			</p>
			<p>
				Total Number of Sold Items :{' '}
				<strong>{SoldItems.length}</strong>
			</p>
			<p>
				Total Number of Not Sold Items :{' '}
				<strong>{NotSoldItems.length}</strong>
			</p>
		</div>
	);
}

export default Stats;
