import React from 'react-native';
import { bindActionCreators } from 'redux';
import Main from '../components/main';
import * as techniqueActions from '../actions/techniqueActions';
import { connect } from 'react-redux';

// @connect(state => ({
//   state: state.counter
// }))
// class CounterApp extends Component {
//   render() {
//     const { state, actions } = this.props;
//     return (
//       <Counter
//         counter={state.count}
//         {...actions}
//       />
//     );
//   }
// }
class BJJApp extends React.Component {
  render() {
    console.log(this.props);
    const { state, actions } = this.props;
    return (
      <Main
        techniques={[]}
        {...actions}
      />
    );
  }
}

function mapStateToProps(state) {
  return { techniques: state.techniques };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(techniqueActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(BJJApp);

// export default connect(state => ({
//   techniques: state.techniques,
// }),
//   (dispatch) => ({
//     actions: bindActionCreators(techniqueActions, dispatch),
//   })
// )(BJJApp);
