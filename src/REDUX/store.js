import { createStore } from "redux";
import reducer from "./products/reducer";

const store = createStore(reducer);

export default store;