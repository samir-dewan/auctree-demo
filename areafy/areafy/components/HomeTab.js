import { Text, View, StyleSheet } from "react-native";
import ViewList from "./View/ViewList";
import Profile from "./Profile";

function HomeTab() {
    return (
        <View style={styles.homeTabContainer}>
                <Profile />
                <ViewList />
        </View> 
    )
}

const styles = StyleSheet.create({
})

export default HomeTab;