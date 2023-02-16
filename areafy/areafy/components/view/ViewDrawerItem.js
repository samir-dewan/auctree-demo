import { Text, View, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/styles";
import { DrawerItem } from "@react-navigation/drawer";

function ViewDrawerItem(props) {

    const navigation = useNavigation();

    function cardPressHandler() {
        navigation.navigate('ViewDetails', {
            viewId: props.id
        });
    }
    
    return (
        <DrawerItem label={props.name} onPress={cardPressHandler}/>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        borderColor: GlobalStyles.colors.gray500,
    }
})

export default ViewDrawerItem;