import { Text, View, StyleSheet } from "react-native";

function MapToken({propertyDetails}) {
    return (
        <View style={styles.tokenContainer}>
                <Text>MapToken</Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    tokenContainer: {
        flex: 'row',
    }
})

export default MapToken;