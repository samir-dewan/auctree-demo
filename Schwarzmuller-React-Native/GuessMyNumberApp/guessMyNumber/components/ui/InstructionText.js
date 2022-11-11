import {StyleSheet, Text} from 'react-native';
import colours from '../../constants/colours';


function InstructionText({children, style}) {
    return <Text style={[styles.instructionText, style]}>{children}</Text>
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: colours.accent500,
        fontSize: 24,
    },
})