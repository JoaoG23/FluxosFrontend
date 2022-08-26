import { createStore, combineReducers } from "redux";
import carregadorReducer from "../reducers/carregadorReducer";
import dashReducer from "../reducers/dashReducer";
import fluxoReducer from "../reducers/fluxoReducer";
import modalReducer from "../reducers/modalReducer";

const allReducers = combineReducers({
  carregador: carregadorReducer,
  dashboard: dashReducer,
  fluxo: fluxoReducer,
  modal: modalReducer,
});

const store = createStore(allReducers);

export default store;
