export const chargeCharacters = (characters) => (dispatch) => {
	dispatch({
		type: "charge_caracters",
		payload: characters
	})
}
