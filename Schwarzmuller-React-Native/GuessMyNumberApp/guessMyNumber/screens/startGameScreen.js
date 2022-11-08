import {TextInput, View, Alert, StyleSheet} from 'react-native';
import { useState } from 'react';
import PrimaryButton from "../components/ui/PrimaryButton";
import colours from '../constants/colours';

function startGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(input) {
        setEnteredNumber(input);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler(input) {
        const chosenNumber = parseInt(input);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            // show alert...
            Alert.alert('Invalid number', 'Number must be between 1 and 99.', {text: 'Got it!', style: 'destructive', onPress: resetInputHandler })
            return;
        }

        console.log('valid');
        onPickNumber(chosenNumber);
    }
    return <View style={styles.inputContainer}>
                <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad' autoCapitalize='none' autoCorrect={false} onChangeText={numberInputHandler} value={enteredNumber}/>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </View>
}
export default startGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        flex: 1,
        padding: 8,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        backgroundColor: colours.primary800,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
    numberInput: {
        height: 50,
        width: 40,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: colours.accent500,
        borderBottomWidth: 2,
        color: colours.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
    },
});