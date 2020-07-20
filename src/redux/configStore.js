import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { authentication } from "./reducers/auth.reducer";
import { homeReducer } from "./reducers/home.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	authentication,
	homeReducer,
});

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);
