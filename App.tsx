import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Home from './src/components/Home';
import LinearGradient from 'react-native-linear-gradient';
import styles from './src/components/style';

export default class App extends Component {
  render() {
    return (
      <LinearGradient
        colors={['rgba(88, 23, 225, 1)', 'rgba(94, 33, 224, 0.56)']}
        style={styles.container}
        start={{x: 1, y: 0}}
        end={{x: -1, y: 1}}
        locations={[0.1, 1]}>
        <View>
          <Home></Home>
        </View>
      </LinearGradient>
    );
  }
}
