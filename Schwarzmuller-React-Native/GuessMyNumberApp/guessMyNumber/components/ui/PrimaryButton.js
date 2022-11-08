import {View, Text, Pressable, StyleSheet} from 'react-native';
import colours from '../../constants/colours';

function PrimaryButton({children, onPress}) {

    return (
    <View style={styles.buttonOuterContainer}>
        <Pressable style={({pressed}) => 
        pressed ? [styles.buttonInnerContainer, styles.pressedStyle]: styles.buttonInnerContainer} 
        onPress = {onPress} 
        android_ripple={{color: colours.primary600}}>
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: colours.primary600,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
        shadowOpacity: 0.25,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressedStyle: {
        opacity: 0.75,
    },
});