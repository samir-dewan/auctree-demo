import {StyleSheet, View, Text} from 'react-native';
import { useState } from 'react';
import Title from '../components/ui/Title';

function generateRandomBetween(min, max, exclude) {
    const rdmBtwn = Math.floor(Math.random() * (max - min) + min);

    if (rdmBtwn === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rdmBtwn;
    }
}
function GameScreen({userNumber}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <View>
                <Text>
                    Higher or Lower?
                </Text>
                + -
            </View>
            <View>
                <Text>Previous Guesses</Text>
            </View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
})