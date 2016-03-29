/* eslint arrow-body-style: ["error", "always"] */

import React, {
  Text,
  TouchableOpacity,
  PropTypes,
} from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.bgStyle}>
      <Text style={props.fgStyle}>{props.children}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  bgStyle: PropTypes.number.isRequired,
  fgStyle: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
