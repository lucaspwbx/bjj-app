/* eslint-disable react/prefer-stateless-function */
// stateless components doesnt work well with hot reloading
import React, {
  StyleSheet,
  Component,
  View,
} from 'react-native';

import Button from './button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 10,
    width: 250,
    height: 40,
    padding: 10,
    backgroundColor: '#5AC8FA',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'arial',
  },
});

class Main extends Component {
  openAddTechniqueScreen() {
    console.log('open add technique view');
  }
  render() {
    const { techniques, addTechnique, setPositionFilter } = this.props;
    console.log(techniques);

    return (
      <View style={styles.container}>
        <Button
          onPress={this.openAddTechniqueScreen.bind(this)}
          bgStyle={styles.button}
          fgStyle={styles.buttonText}
        >Adicionar tecnica</Button>
        <Button
          onPress={this.openAddTechniqueScreen.bind(this)}
          bgStyle={styles.button}
          fgStyle={styles.buttonText}
        >Tecnicas</Button>
        <Button
          onPress={this.openAddTechniqueScreen.bind(this)}
          bgStyle={styles.button}
          fgStyle={styles.buttonText}
        >Campeonatos</Button>
        <Button
          onPress={this.openAddTechniqueScreen.bind(this)}
          bgStyle={styles.button}
          fgStyle={styles.buttonText}
        >Academias</Button>
      </View>
    );
  }
}

export default Main;
