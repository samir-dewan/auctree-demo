import { Text, View, StyleSheet } from "react-native";

function Dial({propertyDetails}) {
    return (
        <View style={styles.dialContainer}>
                <Text>Dial</Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    dialContainer: {
        flex: 'row',
    }
})

export default Dial;