import {View, Text, StyleSheet, Dimensions} from 'react-native';
import colours from '../../constants/colours';

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const deviceWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: colours.accent500,
        padding: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        margin: deviceWidth < 380 ? 12 : 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: colours.accent500,
        fontSize: deviceWidth < 380 ? 28: 36,
        fontFamily: 'open-sans-bold',
    },
})