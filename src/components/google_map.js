import React, {Component} from 'react';

export default class GoogleMap extends Component {
	componentDidMount() {
		//google maps takes a reference to an html node to show where it should be rendered to
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}

	render() {
		//ref allows us to get a direct reference to an html element that has been rendered
		return <div ref="map"></div>
	}
}
