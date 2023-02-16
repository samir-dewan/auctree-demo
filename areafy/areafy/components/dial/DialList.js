import { View, StyleSheet, FlatList } from "react-native";

function DialList({dialListDetails}) {
    return (
        <View style={styles.listContainer}>
                <FlatList />
        </View> 
    )
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 'row',
    }
})

export default DialList;