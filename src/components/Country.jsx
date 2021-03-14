import React from 'react';

class Country extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='country-wrapper'>
				<div className='flag'></div>
				<div className='name'>{this.props.countryName}</div>
				<div className='confirmed'>{this.props.confirmed}</div>
				<div className='recovered'>{this.props.recovered}</div>
				<div className='deaths'>{this.props.deaths}</div>
			</div>
		);
	}
}

export default Country;
