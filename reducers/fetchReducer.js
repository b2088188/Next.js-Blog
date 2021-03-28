function fetchReducer(currentState = { status: "idle", error: null }, action) {
	switch (action.type) {
		case "REQUESTED_PENDING":
			return {
				...currentState,
				status: "pending",
			};
		case "REQUESTED_RESOLVED":
			return {
				...currentState,
				status: "resolved",
				error: null,
			};
		case "REQUESTED_REJECTED":
			return {
				...currentState,
				status: "rejected",
				error: action.error,
			};
		case "FETCH_RESET":
			return { status: "idle", error: null };
		default:
			return currentState;
	}
}

export default fetchReducer;
