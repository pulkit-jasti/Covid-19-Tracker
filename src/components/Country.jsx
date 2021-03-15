import React from 'react';
import ReactCountryFlag from 'react-country-flag';

class Country extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='country-wrapper'>
				<div className='flag'>
					<ReactCountryFlag
						countryCode={this.props.countryCode}
						svg
						style={{
							fontSize: '2.5em',
							lineHeight: '2em',
						}}
						aria-label='United States'
					/>
				</div>
				<div className='name'>{this.props.countryName}</div>
				<div className='confirmed'>{this.props.confirmed}</div>
				<div className='recovered'>{this.props.recovered}</div>
				<div className='deaths'>{this.props.deaths}</div>
			</div>
		);
	}
}

export default Country;
