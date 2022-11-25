import {View, Pressable, Text, StyleSheet, Platform} from 'react-native';

function CategoryGridTile({title, colour, onPress}) {
    return (
    <View style={styles.gridContainer}>
        <Pressable android_ripple={{color: '#ccc'}}
        style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
        onPress={onPress}>
            <View style={[styles.tileContainer, {backgroundColor: colour}]}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        </Pressable>
    </View>
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    tileContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        borderRadius: 8,
        alignItems: 'center',
    },
    button: {
        flex: 1,
    },
    gridContainer: {
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {height: 2, width: 2},
        shadowRadius: 8,
        backgroundColor: 'white',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    buttonPressed: {
        opacity: 0.5,
    }
})