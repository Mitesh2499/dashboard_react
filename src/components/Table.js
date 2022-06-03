import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { format } from 'date-fns';

import { InputText } from 'primereact/inputtext';
export default function Table({ data }) {
	console.log({ data });
	const [filterData, setFilterData] = useState([...data]);
	const [text, setText] = useState('');
	const paginatorLeft = (
		<Button
			type='button'
			icon='pi pi-refresh'
			className='p-button-text'
		/>
	);
	const paginatorRight = (
		<Button type='button' icon='pi pi-cloud' className='p-button-text' />
	);

	useEffect(() => {
		//if text is empty then show all records
		if (text === '') {
			setFilterData([...data]);
			return;
		}

		const tempData = [...data];
		const newData = tempData.filter((item) => {
			const title = item.title.toLowerCase();
			const category = item.category.toLowerCase();
			if (
				title.includes(text.toLowerCase()) ||
				category.includes(text.toLowerCase())
			)
				return item;
		});

		setFilterData(newData);
	}, [text, data]);

	return (
		<>
			<h3 className='my-3'>Table</h3>
			<div>
				<InputText
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder='Enter keyword'
				/>
			</div>

			<div className=' my-3'>
				<DataTable
					value={filterData}
					paginator
					responsiveLayout='scroll'
					paginatorTemplate='CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown'
					currentPageReportTemplate='Showing {first} to {last} of {totalRecords}'
					rows={10}
					rowsPerPageOptions={[10, 20, 50]}
					paginatorLeft={paginatorLeft}
					paginatorRight={paginatorRight}
				>
					<Column
						field='id'
						header='Id'
						style={{ width: '5%' }}
					></Column>
					<Column
						field='title'
						header='Title'
						style={{ width: '35%' }}
					></Column>
					<Column
						field='price'
						header='Price'
						style={{ width: '10%' }}
					></Column>
					<Column
						field='category'
						header='Category'
						style={{ width: '25%' }}
					></Column>
					<Column
						field='dateOfSale'
						header='Date'
						style={{ width: '25%' }}
						body={(item) =>
							format(
								new Date(item.dateOfSale),
								'dd/MM/yyyy'
							)
						}
					></Column>
					<Column
						field='sold'
						header='Sale'
						style={{ width: '25%' }}
						body={(item) => (item.sold ? 'Yes' : 'No')}
					></Column>
					<Column
						field='image'
						header='Image'
						style={{ width: '25%' }}
						body={(item) => (
							<img
								src={item.image}
								style={{
									width: '50px',
									height: '50px',
								}}
							/>
						)}
					></Column>
				</DataTable>
			</div>
		</>
	);
}
