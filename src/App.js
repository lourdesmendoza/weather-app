import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {
	//Form state
	const [search, setSearch] = useState({
		city: '',
		country: ''
	});
	const [query, setQuery] = useState();

	const { city, country } = search;

	useEffect(() => {
		console.log(city)
	}, [city, query])


	return (
		<Fragment>
			<Header 
				title='Weather app'
			/>
			
			<div className="content-form">
				<div className="container">
					<div className="row">
						<div className="col m6  s12">
							<Form
								search={search}
								setSearch={setSearch}
								setQuery={setQuery}
							/>
						</div>

						<div className="col m6  s12">
							2
						</div>
					</div>

				</div>

			</div>
		</Fragment>
	);
}

export default App;
