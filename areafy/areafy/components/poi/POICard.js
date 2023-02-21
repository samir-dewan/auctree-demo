import { Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function POICard({poiID, poi, time, method}) {
    return (
        <View style={styles.cardContainer}>
                <Text>{poiID}</Text>
                <Text>{poi}</Text>
                <Text>{time}</Text>
                <Text>{method}</Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: GlobalStyles.colors.primary100,
        margin: '1%'     
    },
})

export default POICard;