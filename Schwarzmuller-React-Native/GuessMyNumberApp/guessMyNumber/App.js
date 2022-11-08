import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import startGameScreen from './screens/startGameScreen';

export default function App() {
  return (
    <View style={styles.rootScreen}>
      <startGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: '#ddb52f',
  }
});
