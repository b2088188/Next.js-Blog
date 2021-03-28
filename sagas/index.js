import { client } from "../utils/api-client";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

function* createContact(action) {
	const formData = action.payload.formData;
	yield put({ type: "REQUESTED_PENDING" });
	try {
		const {
			data: { contact },
		} = yield call(client, "/api/v1/contacts", {
			data: formData,
		});
		yield put({ type: "REQUESTED_RESOLVED" });
		yield put({ type: "CREATE_CONTACT_RESOLVED", contact });
	} catch (err) {
		yield put({ type: "REQUESTED_REJECTED", error: err });
	}
}

function* mySaga() {
	yield takeEvery("CREATE_CONTACT_REQUESTED", createContact);
}

export default mySaga;
