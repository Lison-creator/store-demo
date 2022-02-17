import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducers/counter-reducer";


/* La fonction "combineReducer" permet de combiner tous les reducers en un seul */
const reducer = combineReducers({
    counter: counterReducer,
    /* product: productReducer,
    weather: weatherReducer */
})

/* Le store est unique dans toute l'application */
export default createStore(reducer);