import React from 'react';
import { VictoryPie } from 'victory';

function Pie({ data }) {
	const categories = data.map((item) => item.category);
	const uniqueCateories = new Set([...categories]);

	const tempuniqueCategories = [...uniqueCateories];

	const pieData = tempuniqueCategories.map((unqiueCat) => {
		const filterData = data.filter((item) => item.category === unqiueCat);
		return {
			x: unqiueCat,
			y: filterData.length,
		};
	});

	return (
		<div style={{ height: '400px', width: '600px' }}>
			<h3>Pie Chart</h3>
			<VictoryPie
				data={pieData}
				labels={({ datum }) => `${datum.x}: ${datum.y}`}
			/>
		</div>
	);
}

export default Pie;
