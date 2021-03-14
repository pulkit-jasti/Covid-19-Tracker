import React from 'react';
import TopBanner from './components/TopBanner';
import CountryStats from './components/CountryStats';

class App extends React.Component {
	render() {
		return (
			<>
				<TopBanner />
				<CountryStats />
			</>
		);
	}
}

export default App;
