/* eslint-disable react/prefer-stateless-function */
// stateless components doesnt work well with hot reloading
import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity,
  PropTypes,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
});

class Counter extends Component {
  render() {
    const { counter, increment, decrement } = this.props;

    return (
      <View style={styles.container}>
        <Text>{counter}</Text>
        <TouchableOpacity onPress={increment} style={styles.button}>
          <Text>novidadeup modificado</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement} style={styles.button}>
          <Text>down</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};

export default Counter;
