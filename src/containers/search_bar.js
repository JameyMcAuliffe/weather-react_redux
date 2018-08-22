import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({term: event.target.value})
	}

	onFormSubmit(event) {
		//tells browser to not reset on submit, which is caused by the form tag
		event.preventDefault();

		this.props.fetchWeather(this.state.term);
		//reset input
		this.setState({term: ''});
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Search for a city..."
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Search</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	//gives access to this.props.fetchWeather
	return bindActionCreators({fetchWeather}, dispatch);
}

//mapDispatchToProps is always second arg to connect, 1st arg is null if no mapStateToProps function is being passed
export default connect(null, mapDispatchToProps)(SearchBar);
