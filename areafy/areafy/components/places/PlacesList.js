import { View, FlatList } from "react-native";
import PlacesCard from "./PlacesCard";
import { PLACES } from "../../data/dummy-data";


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