import React from 'react-native';
import { Provider } from 'react-redux';
import store from '../store/configureStore';
import CounterApp from './counterApp';

/* following lines were moved to configureStore.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);
*/

/* another way for creating components:
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}
*/

const App = () => (
  <Provider store={store}>
    <CounterApp />
  </Provider>
);

export default App;
