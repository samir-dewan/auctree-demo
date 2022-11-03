import {StyleSheet, View, Text, Pressable} from 'react-native';

function GoalItem(props) {
    return (
            <Pressable style={({pressed}) => pressed && styles.pressedItem} android_ripple={color='blue'} onPress={props.onDeleteItem.bind(this, props.id)}>
                <View style={styles.goalItem}>
                    <Text style={styles.goalText}>{props.text}</Text>
                </View>
            </Pressable>
    )

}

export default GoalItem;

const styles = StyleSheet.create({
    goalText: {
        color: 'white',
      },
    pressedItem: {
        color: 'red',
        opacity: 0.5
    },
    goalItem: {
        padding: 16,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        alignItems: 'center',
        borderColor: '#cccccc',
        borderWidth: 1,
        marginVertical: 8,
    }
});