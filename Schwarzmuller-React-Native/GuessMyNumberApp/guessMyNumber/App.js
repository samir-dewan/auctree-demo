import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

import StartGameScreen from './screens/startGameScreen';
import GameScreen from './screens/gameScreen';
import GameOver from './screens/gameOver';
import colours from './constants/colours';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require("./assets/fonts/OpenSans-Regular.ttf"),
    'open-sans-bold': require("./assets/fonts/OpenSans-Bold.ttf")
  }
  );
  console.log("starting app");
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  function pickedNumberHandler(input) {
    setUserNumber(input);
    console.log("number picked");
    setGameIsOver(false);
  }

  function GameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function StartNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if (userNumber) {
    console.log("starting Game Screen");
    screen = <GameScreen userNumber = {userNumber} onGameOver = {GameOverHandler}/>
  };

  if (gameIsOver && userNumber) {
    screen = <GameOver userNumber={userNumber} roundsNumber={guessRounds} onRestart={StartNewGameHandler}/>
  }

  return (
    <LinearGradient colors={[colours.primary700, colours.accent500]} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/background.png')} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
