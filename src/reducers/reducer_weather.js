import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			//never want to mutate state, concat returns a new version of state array, as opposed to pushing new data into state
			//return state.concat([action.payload.data]);
			return [action.payload.data, ...state];
	}

	return state;
};
