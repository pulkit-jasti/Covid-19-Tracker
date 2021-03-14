import React from 'react';
import Country from './Country';

class CountryStats extends React.Component {
	state = {
		fullList: [],
		displayList: [],
	};

	componentDidMount() {
		fetch('https://covid19-api.com/country/all', {
			method: 'GET',
			headers: {
				accept: 'application/json',
			},
		})
			.then(res => res.json())
			.then(data => {
				this.setState({
					fullList: data,
					displayList: data,
				});
			})
			.catch(console.log);
	}

	handleSearch(e) {
		//console.log(e.target.value);
		//var searchValue = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
		var searchValue = e.target.value;
		console.clear();
		this.setState(prevState => {
			let filterList = prevState.fullList.filter(el => {
				//console.log(el.country);
				//if (el.country.search(e.target.value) != -1) {
				// let obj;
				// if (el.country.search(e.target.value) != -1) {
				// 	console.log(el, el.country.search(e.target.value));
				// 	obj = el;
				// 	//return el;
				// }
				return el.country.search(new RegExp(searchValue, 'i')) != -1;
			});
			console.log(filterList);
			return { displayList: filterList };
		});
	}

	render() {
		return (
			<div className='country-stats'>
				<div className='info-container'>
					<div className='search-wrapper'>
						<input type='text' onChange={this.handleSearch.bind(this)} />
						<select name='sort' id=''>
							<option value=''>Select an option</option>
							<option value=''>Confirmed: Highest to Lowest</option>
							<option value=''>Confirmed: Lowest to Highest</option>
							<option value=''>Recovered: Highest to Lowest</option>
							<option value=''>Recovered: Lowest to Highest</option>
							<option value=''>Deaths: Highest to Lowest</option>
							<option value=''>Deaths: Lowest to Highest</option>
						</select>
					</div>
					<div className='table-header country-wrapper'>
						<div className='flag'></div>
						<div className='name'>Country</div>
						<div className='confirmed'>Confirmed</div>
						<div className='recovered'>Recovered</div>
						<div className='deaths'>Deaths</div>
					</div>
				</div>

				<Country countryName='Indiadsd' confirmed='2,36,774' recovered='3,45,380' deaths='23,496' />
				{this.state.displayList.map((el, index) => {
					return <Country key={index} countryName={el.country} confirmed={el.confirmed} recovered={el.recovered} deaths={el.deaths} />;
				})}
			</div>
		);
	}
}

export default CountryStats;
