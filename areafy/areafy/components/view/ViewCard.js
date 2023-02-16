import { Text, View, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/styles";

function ViewCard(props) {

    const navigation = useNavigation();

    function cardPressHandler() {
        navigation.navigate('ViewDetails', {
            viewProps: props
        });
    }

    return (
        <Pressable onPress={cardPressHandler}>
            <View>
                <Text>
                    {props.name}
                </Text>
                <View>
                    <Text>
                        {props.minBedrooms} to {props.maxBedrooms} bedrooms
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        borderColor: GlobalStyles.colors.gray500,
    }
})

export default ViewCard;