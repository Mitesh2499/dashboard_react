import React from 'react';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';

const price_range = [
	'0-100',
	'101-200',
	'201-300',
	'301-400',
	'401-500',
	'501-600',
	'601-700',
	'701-800',
	'801-900',
	'901-above',
];

const checkInBetween = (price) => {
	return price_range.find((item) => {
		const val = item.split('-');

		if (val[1] == 'above') {
			if (price >= parseInt(val[0])) {
				return item;
			}
		}

		if (price >= parseInt(val[0]) && price <= parseInt(val[1])) {
			return item;
		}
	});
};

function Barchart({ data }) {
	const tempbarData = data.map((item) => {
		return checkInBetween(item.price);
	});

	const barData = price_range.map((range) => {
		const filterData = tempbarData.filter((item) => item === range);
		return {
			x: range,
			y: filterData.length,
		};
	});

	return (
		<div style={{ width: '500px', height: '600px' }}>
			<h3>Bar Chart</h3>
			<VictoryChart theme={VictoryTheme.material} domainPadding={10}>
				<VictoryBar width={700} data={barData} />
			</VictoryChart>
		</div>
	);
}

export default Barchart;
