import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import cartReducer from "../reducers/cartReducer";
const middleware = [thunk];
export const store = createStore(
  cartReducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);
