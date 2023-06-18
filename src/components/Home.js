import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import Button from './Button';
import styles from './style';
export default class Home extends Component {
  render() {
    const handleButtonPress = () => {
      console.log('Button pressed!');
    };
    return (
      <View style={styles.maincontainer}>
        <View style={styles.imageContainer}>
          <Image source={require('../images/home.jpg')} style={styles.image} />
        </View>
        <View>
          <Text> Enjoy Your Food </Text>
        </View>
        <View>
          {' '}
          <Button title="Press Me" onPress={handleButtonPress} />
        </View>
      </View>
    );
  }
}
