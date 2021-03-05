import { combineReducers, createStore, applyMiddleware } from "redux";
import OpenModalReducer from "./module/openModal/reducer";
import houseNotesReducer from "./module/houseNotes/reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  openModal: OpenModalReducer,
  notes: houseNotesReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
