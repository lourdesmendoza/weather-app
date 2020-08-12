import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {
	//Form state
	const [search, setSearch] = useState({
		city: '',
		country: ''
	});
	const [query, setQuery] = useState(false);

	const { city, country } = search;

	useEffect(() => {
		const consultAPI = async() => {
			
			if(query) {
				const appId = '22023b95ed024d92b893d10f0317ce73';
				const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
	
				const request = await fetch(url);
				const result = await request.json();
	
				console.log(result);
			}

		};

		consultAPI();
	}, [city, country, query])


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
