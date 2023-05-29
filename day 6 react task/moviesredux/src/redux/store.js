// import { moviesReducer } from "./moviesReducer";
import { Reducer } from "./Reducer";
import { rootReducer } from "./rootReducer";
const { createStore, applyMiddleware, compose } = require("redux");
const {default: loggerMiddleWare} = require("../middleWares/loggerMiddleWare");
const { default: thunk } = require("redux-thunk");
// const { Reducer } = require("./Reducer");

let store;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// if (process.env.NODE_ENV === "development") {
//   store = createStore(Reducer,composeEnhancers(applyMiddleware(loggerMiddleWare, thunk))
//   );
// } else {
//   store = createStore(Reducer, applyMiddleware(thunk));
// }


if (process.env.NODE_ENV === "development") {
  store = createStore(Reducer,composeEnhancers(applyMiddleware(loggerMiddleWare, thunk))
  );
} else {
  store = createStore(Reducer, applyMiddleware(thunk));
}
export default store;
// if (process.env.NODE_ENV === "development") {
//     store = createStore(rootReducer,composeEnhancers(applyMiddleware(loggerMiddleWare, thunk))
//     );
//   } else {
//     store = createStore(rootReducer, applyMiddleware(thunk));
//   }
// export default store;
