import { Text, View, StyleSheet, Pressable, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/styles";

function ViewCard(props) {

    const navigation = useNavigation();

    function cardPressHandler() {
        navigation.navigate('ViewDetails', {
            viewProps: props,
            filters: props.filters
        });
    }

    return (
        <Pressable onPress={cardPressHandler}>
            <View style={styles.cardContainer}>
                <Text>
                    {props.name}
                </Text>
                <View>
                    <Text>
                        {props.minBedrooms} to {props.maxBedrooms} bedrooms
                    </Text>
                    <Text>
                        {props.minSpend}-{props.maxSpend}
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        borderColor: GlobalStyles.colors.primary50,
        borderWidth: 0.25,
        margin: '0.5%',
    }
})

export default ViewCard;