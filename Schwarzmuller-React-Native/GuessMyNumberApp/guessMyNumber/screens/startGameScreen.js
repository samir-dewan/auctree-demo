import {TextInput, View, Alert, StyleSheet} from 'react-native';
import { useState } from 'react';
import PrimaryButton from "../components/ui/PrimaryButton";
import colours from '../constants/colours';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(input) {
        setEnteredNumber(input);
    };

    function resetInputHandler() {
        setEnteredNumber('');
    };

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            // show alert...
            Alert.alert('Invalid number', 'Number must be between 1 and 99.', {text: 'Got it!', style: 'destructive', onPress: resetInputHandler})
            return;
        };
        console.log('valid');
        onPickNumber(chosenNumber);
    };

    return (
        <View style={styles.rootContainer}>
            <Title>
                Guess My Number
            </Title>
            <Card>
                <InstructionText>
                    Enter a number!
                </InstructionText>
                    <TextInput style={styles.numberInput} 
                        maxLength={2} 
                        keyboardType='number-pad' 
                        autoCapitalize='none' 
                        autoCorrect={false} 
                        onChangeText={numberInputHandler} 
                        value={enteredNumber} />
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                        </View>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                        </View>
                    </View>
                </Card>
        </View>
    );
};
export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    numberInput: {
        height: 50,
        width: 40,
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 32,
        borderBottomColor: colours.accent500,
        borderBottomWidth: 2,
        color: colours.accent500,
        marginVertical: 8,
        fontWeight: 'bold'
    }
});