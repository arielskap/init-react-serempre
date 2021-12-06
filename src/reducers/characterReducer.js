const INITIAL_STATE = {
	characters: []
}

export default ( state = INITIAL_STATE, action ) => {
	switch (action.type) {
		case "charge_caracters": {
			return {...state, characters: action.payload }
		}
		default: return state
	}
}