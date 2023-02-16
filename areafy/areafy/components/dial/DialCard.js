import { Text, View, StyleSheet } from "react-native";

function DialCard({dialDetails}) {
    return (
        <View style={styles.dialContainer}>
                <Text>DialCard</Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 'row',
    }
})

export default DialCard;