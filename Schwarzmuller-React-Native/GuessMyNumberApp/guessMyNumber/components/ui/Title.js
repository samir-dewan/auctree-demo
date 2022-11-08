import {StyleSheet, Text} from 'react-native';
import colours from '../../constants/colours';

function Title({heading}) {
    return (
        <Text style = {styles.title}>
            {heading}
        </Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colours.accent500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: colours.accent500,
        padding: 12,
    }
})