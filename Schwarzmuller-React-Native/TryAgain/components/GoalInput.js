import { StyleSheet, View, TextInput, Button, Modal, Image} from "react-native";
import {useState} from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      };

    function addGoalHandler() {
        props.addGoalHandle(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visibly} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/icon.png')} />
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Your course goal!" 
                    onChangeText={goalInputHandler} 
                    value={enteredGoalText} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0"/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel'  onPress={props.onCancel} color="#f31282"/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 8,

      },
      image: {
        width: 100,
        height: 100,
        marginTop: 8,
      },
      button: {
        width: '30%',
        marginHorizontal: 8,
      },
      buttonContainer: {
        flexDirection: 'row',
        marginTop: 8,
      },
      inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        backgroundColor: '#311b6b',
      },
})