function contactsReducer(currentState = [], action) {
	switch (action.type) {
		case "CREATE_CONTACT_RESOLVED":
			return [...currentState, action.contact];
		default:
			return currentState;
	}
}

export default contactsReducer;
