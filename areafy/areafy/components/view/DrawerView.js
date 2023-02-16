import { useNavigation } from "@react-navigation/native";
import { DrawerItem } from "@react-navigation/drawer";

function DrawerView() {

    const navigation = useNavigation()

    function ViewDetailHandler() {
        navigation.navigate('ViewDetails')
    }

    return (
        <DrawerItem label="View 1" onPress={ViewDetailHandler} />
    )
}

export default DrawerView;