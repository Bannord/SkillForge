import { applyMiddleware, combineReducers, createStore } from "redux";
import {CustomerReducer} from './CustomerReducer'
import { bankCardsReducer } from "./bankCardsReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    customers: CustomerReducer,
    cardBanks: bankCardsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))