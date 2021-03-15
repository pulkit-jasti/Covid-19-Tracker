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
		var searchValue = e.target.value;
		this.setState(prevState => {
			let filterList = prevState.fullList.filter(el => {
				return el.country.search(new RegExp(searchValue, 'i')) !== -1;
			});
			return { displayList: filterList };
		});
	}

	handleSort(e) {
		console.log('option selected', e.target.value);
		this.setState(prevState => {
			return { displayList: prevState.fullList };
		});
		console.log('After set state');
		let updatedList = [];

		switch (e.target.value) {
			case 'default':
				updatedList = this.state.fullList;
				break;

			case 'C-HL':
				updatedList = Sort(this.state.displayList, 'confirmed', 'H-L');
				break;

			case 'C-LH':
				updatedList = Sort(this.state.displayList, 'confirmed', 'L-H');
				break;

			case 'R-HL':
				updatedList = Sort(this.state.displayList, 'recovered', 'H-L');
				break;

			case 'R-LH':
				updatedList = Sort(this.state.displayList, 'recovered', 'L-H');
				break;

			case 'D-HL':
				updatedList = Sort(this.state.displayList, 'deaths', 'H-L');
				break;

			case 'D-LH':
				updatedList = Sort(this.state.displayList, 'deaths', 'L-H');
				break;

			default:
				break;
		}

		this.setState({
			displayList: updatedList,
		});
	}

	render() {
		return (
			<div className='country-stats'>
				<div className='info-container'>
					<div className='search-wrapper'>
						<input type='text' placeholder='Search by Country name' onChange={this.handleSearch.bind(this)} />
						<div className='select'>
							<select name='sort' id='' onChange={this.handleSort.bind(this)}>
								<option value='default'>Sort</option>
								<option value='C-HL'>Confirmed: Highest to Lowest</option>
								<option value='C-LH'>Confirmed: Lowest to Highest</option>
								<option value='R-HL'>Recovered: Highest to Lowest</option>
								<option value='R-LH'>Recovered: Lowest to Highest</option>
								<option value='D-HL'>Deaths: Highest to Lowest</option>
								<option value='D-LH'>Deaths: Lowest to Highest</option>
							</select>
						</div>
					</div>
				</div>

				<div className='list-container'>
					<div className='table-header country-wrapper'>
						<div className='flag'></div>
						<div className='name'>Country</div>
						<div className='confirmed'>Confirmed</div>
						<div className='recovered'>Recovered</div>
						<div className='deaths'>Deaths</div>
					</div>
					{this.state.displayList.map((el, index) => {
						return (
							<Country
								key={index}
								countryName={el.country}
								confirmed={el.confirmed}
								recovered={el.recovered}
								deaths={el.deaths}
								countryCode={el.code}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

function Sort(arr, key, operation) {
	if (operation === 'L-H') {
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr.length - 1; j++) {
				if (arr[j][key] > arr[j + 1][key]) {
					[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				}
			}
		}
	} else if (operation === 'H-L') {
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr.length - 1; j++) {
				if (arr[j][key] < arr[j + 1][key]) {
					[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				}
			}
		}
	} else {
		console.error('Wrong parameter in sort function');
	}

	return arr;
}

export default CountryStats;
