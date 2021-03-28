import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import contactsReducer from "./contactsReducer";

export default combineReducers({
	posts: postsReducer,
	contacts: contactsReducer,
});
