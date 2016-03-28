import React, { View, Text } from 'react-native';

// functional stateless function with implicit return (could use destructuring when passing props)
// see more at: https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components
const MyComponent = () => (
      <View>
        <Text>enzyme</Text>
        <Text>rules</Text>
      </View>
);

export default MyComponent;
