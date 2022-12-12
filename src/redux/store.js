import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "./reducer/RootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
const initialState = {};
const middlewares = [thunk];
let devtools = (x) => x;

const persistConfig = {
  key: "modernmart-root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

// export default () => {
//     let store = createStore(
//         // persistedReducer,
//         initialState,
//         compose(applyMiddleware(...middlewares), devtools)
//     )
//     let persistor = persistStore(store)
//     return { store, persistor }
// }
export const Store = createStore(persistedReducer, initialState, compose(applyMiddleware(...middlewares), devtools));

export const persistor = persistStore(Store);
