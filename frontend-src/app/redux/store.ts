import {createStore, combineReducers} from "redux";
import {formReducer} from "../components/upload-form/upload-form.redux";

const rootReducer = combineReducers({
    form: formReducer
});

export const AppStore = createStore(rootReducer);
