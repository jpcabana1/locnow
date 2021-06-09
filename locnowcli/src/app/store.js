import { carrinhoReducer } from "../reducers/carrinho/carrinhoReducer";
import { filmesReducer } from "../reducers/filmes/filmesReducer";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reduceAssembler = combineReducers({
  carrinho: carrinhoReducer,
  filmes: filmesReducer,
});

export const store = createStore(
  reduceAssembler,
  composeEnhancers(applyMiddleware(thunk))
);
