import React from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import CounterApp from './counterApp';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

// export default class App extends React.Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <CounterApp />
//       </Provider>
//     );
//   }
// }

const App = () => (
  <Provider store={store}>
    <CounterApp />
  </Provider>
);

export default App;
