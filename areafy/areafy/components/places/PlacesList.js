import { View, FlatList } from "react-native";


function renderPlaceItem(itemData) {
    return(
        <PlacesCard {...itemData.id}
        />
    )
};

function PlacesList() {
    return (
        <View>
            <FlatList
                data={PLACES}
                renderItem={renderPlaceItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default PlacesList;