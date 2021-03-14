import React from 'react';

class TopBanner extends React.Component {
	state = {
		data: {
			confirmed: 0,
			recovered: 0,
			deaths: 0,
			lastUpdate: '',
		},
	};

	componentDidMount() {
		fetch('https://covid19-api.com/totals', {
			method: 'GET',
			headers: {
				accept: 'application/json',
			},
		})
			.then(res => res.json())
			.then(data => {
				this.setState({
					data: {
						confirmed: data[0].confirmed,
						recovered: data[0].recovered,
						deaths: data[0].deaths,
						lastUpdate: data[0].lastUpdate,
					},
				});
			})
			.catch(console.log);
	}

	render() {
		return (
			<div className='top-banner'>
				<img src='https://c.files.bbci.co.uk/D505/production/_115033545_gettyimages-1226314512.jpg' alt='' />
				<div className='overlay'>
					<div className='heading-wrapper'>
						<h1>Covid-19 Tracker</h1>
						<h2>
							Built by{' '}
							<a href='https://linktr.ee/pulkit_jasti' target='_blank'>
								Pulkit Jasti
							</a>{' '}
							| Source:{' '}
							<a href='https://github.com/pulkit-jasti/Covid-19-Tracker' target='_blank'>
								GitHub
							</a>
						</h2>
					</div>
					<div className='stats'>
						<div className='stat-wrapper'>
							<p className='numbers'>{this.state.data.confirmed}</p>
							<p className='lable'>Total Confirmed</p>
						</div>
						<div className='stat-wrapper'>
							<p className='numbers'>{this.state.data.recovered}</p>
							<p className='lable'>Total Recovered</p>
						</div>
						<div className='stat-wrapper'>
							<p className='numbers'>{this.state.data.deaths}</p>
							<p className='lable'>Total Deaths</p>
						</div>
					</div>
					<div className='date'>Last Updated: {this.state.data.lastUpdate}</div>
				</div>
			</div>
		);
	}
}

export default TopBanner;
