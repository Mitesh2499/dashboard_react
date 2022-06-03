import React, { useEffect, useState } from 'react';

import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons

import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import { Dropdown } from 'primereact/dropdown';
import axios from 'axios';
import { DATA } from './data';
import Stats from './components/Stats';
import { format } from 'date-fns';
import Pie from './components/Pie';
import Barchart from './components/Barchart';
import ImageUpload from './components/ImageUpload';

const Months = [
	{
		label: 'Jan',
		value: 1,
	},
	{
		label: 'Feb',
		value: 2,
	},
	{
		label: 'March',
		value: 3,
	},
	{
		label: 'Apr',
		value: 4,
	},
	{
		label: 'May',
		value: 5,
	},
	{
		label: 'Jun',
		value: 6,
	},
	{
		label: 'Jul',
		value: 7,
	},
	{
		label: 'Aug',
		value: 8,
	},
	{
		label: 'Sept',
		value: 9,
	},
	{
		label: 'Oct',
		value: 10,
	},
	{
		label: 'Nov',
		value: 11,
	},
	{
		label: 'Dec',
		value: 12,
	},
];

function App() {
	const [allProducts, setAllProducts] = useState(DATA);
	const [filteredData, setFilteredData] = useState([]);
	const [selectedMonth, setSelectedMonth] = useState(null);

	useEffect(() => {
		if (!selectedMonth) {
			setFilteredData(DATA);
			return;
		}

		const tempData = [...DATA];
		const filterData = tempData.filter((item) => {
			if (format(new Date(item.dateOfSale), 'M') == selectedMonth)
				return item;
		});

		setFilteredData(filterData);
	}, [selectedMonth]);

	return (
		<div className='container-fluid '>
			<div className='row my-3 mx-1'>
				<Dropdown
					optionLabel='label'
					value={selectedMonth || ''}
					options={Months}
					onChange={(e) => setSelectedMonth(e.value)}
					placeholder='Select a Month'
				/>
			</div>
			<div className='row  my-3'>
				<div className='col-md-4  box '>
					<div className='card mr-2'>
						<ImageUpload />
					</div>
				</div>
				<div className='col-md-8 box'>
					<div className='card ml-2'>
						<Stats data={filteredData} />
					</div>
				</div>
			</div>
			<div className='row  my-3'>
				<div className='col-md-7 box'>
					<div className='card'>
						<Barchart data={filteredData} />
					</div>
				</div>
				<div className='col-md-5 box'>
					<div className='card'>
						<Pie data={filteredData} />
					</div>
				</div>
			</div>

			{filteredData && filteredData.length > 0 && (
				<div className='card'>
					<Table data={filteredData} />
				</div>
			)}
		</div>
	);
}

export default App;
