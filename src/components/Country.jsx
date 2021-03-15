import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import NumberFormat from 'react-number-format';

class Country extends React.Component {
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
				<div className='name'>
					<p>{this.props.countryName}</p>
				</div>
				<div className='confirmed'>
					<NumberFormat value={this.props.confirmed} displayType={'text'} thousandSeparator={true} thousandsGroupStyle='lakh' />
				</div>
				<div className='recovered'>
					<NumberFormat value={this.props.recovered} displayType={'text'} thousandSeparator={true} thousandsGroupStyle='lakh' />
				</div>
				<div className='deaths'>
					<NumberFormat value={this.props.deaths} displayType={'text'} thousandSeparator={true} thousandsGroupStyle='lakh' />
				</div>
			</div>
		);
	}
}

export default Country;
