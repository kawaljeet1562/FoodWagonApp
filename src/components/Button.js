import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './style';
class Button extends Component {
  render() {
    const handlePress = () => {
      console.log('Button pressed!');
    };
    return (
      <View>
        <View style={styles.btncontainer}>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Press Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Button;
