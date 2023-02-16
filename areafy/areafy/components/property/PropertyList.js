import { View, StyleSheet, FlatList } from "react-native";
import { PROPERTIES } from "../../data/dummy-data";
import PropertyCard from "./PropertyCard";

function renderPropertyItem(itemData) {
    return (
    <PropertyCard {...itemData.item}/>
    )
}

function PropertyList() {
    return (
        <View style={styles.listContainer} >
            <FlatList 
                data={PROPERTIES} 
                renderItem={renderPropertyItem} 
                keyExtractor={(item) => item.id} 
            />
        </View> 
    )
}

const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: 'white',
        minHeight: '100%'
    }
})

export default PropertyList;