import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import contactsReducer from "./contactsReducer";
import fetchReducer from "./fetchReducer";

export default combineReducers({
	posts: postsReducer,
	contacts: contactsReducer,
	fetchState: fetchReducer,
});
