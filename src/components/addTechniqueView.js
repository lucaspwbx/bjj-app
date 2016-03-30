import React, {
  View,
  TextInput,
  StyleSheet,
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

const AddTechniqueView = ({ onSave, onCancel }) => {
  return (
    <View style={styles.container}>
      <Button
        bgStyle={styles.button}
        fgStyle={styles.buttonText}
        onPress={onSave}
      >
      Salvar
      </Button>
      <Button
        bgStyle={styles.button}
        fgStyle={styles.buttonText}
        onPress={onCancel}
      >
        Voltar
      </Button>
    </View>
  );
};

// class AddTechniqueView extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const { onSave, onCancel } = this.props;
//     return (
//       <View style={styles.container}>
//         <Button
//           bgStyle={styles.button}
//           fgStyle={styles.buttonText}
//           onPress={onSave}
//         >
//           Salvar
//         </Button>
//         <Button
//           bgStyle={styles.button}
//           fgStyle={styles.buttonText}
//           onPress={onCancel}
//         >
//           Voltar
//         </Button>
//       </View>
//     );
//   }
// }

export default AddTechniqueView;
