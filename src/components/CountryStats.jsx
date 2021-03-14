import React from 'react';
import Country from './Country';

class CountryStats extends React.Component {
	state = {
		list: [],
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
					list: data,
				});
			})
			.catch(console.log);
	}

	render() {
		console.log(this.state.list);
		return (
			<div className='country-stats'>
				<Country countryName='Indiadsd' confirmed='2,36,774' recovered='3,45,380' deaths='23,496' />
				{this.state.list.map((el, index) => {
					return <Country key={index} countryName={el.country} confirmed={el.confirmed} recovered={el.recovered} deaths={el.deaths} />;
				})}
			</div>
		);
	}
}

export default CountryStats;
