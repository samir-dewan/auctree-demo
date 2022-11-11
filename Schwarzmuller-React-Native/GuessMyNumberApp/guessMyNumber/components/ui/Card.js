import {View, StyleSheet} from 'react-native';
import colours from '../../constants/colours';

function Card({children}) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 16,
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        backgroundColor: colours.primary800,
    },
})