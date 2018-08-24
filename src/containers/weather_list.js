import React, {Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';

class WeatherList extends Component {
	renderWeather(cityData) {
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const temps = cityData.list.map((weather) => {
			//gives temperature in kelvins
			let k_temp = weather.main.temp;
	
			//return kelvins converted to fahrenheit
			return k_temp * (9/5) - 459.67;
		});

		return (
			<tr key={cityData.city.id}>
				<td>{cityData.city.name}</td>
				<td><Chart data={temps} color="blue" units="F"/></td>
				<td><Chart data={pressures} color="green" units="hPa"/></td>
				<td><Chart data={humidities} color="red" units="%"/></td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (F)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

//destructuring weather key from state object
function mapStateToProps({weather}) {
	return {weather};
}

export default connect(mapStateToProps)(WeatherList);
