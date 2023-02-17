import { View, FlatList, StyleSheet } from "react-native";
import ViewCard from "./ViewCard";
import { POIFILTERS, HOUSEVIEWS } from "../../data/dummy-data";

function ViewList() {
     
    function renderViewItem(itemData) {
        const completeView = itemData.item;
        const filterList = [];

        completeView.POIfilters.forEach(filter => {
            let row = POIFILTERS.find(e => e.poiID === filter);
            filterList.push(row);
        });

        return (
            <ViewCard filters={filterList} {...completeView} />
        )
    };

    return (
        <View style={styles.viewContainer}>
                <FlatList data={HOUSEVIEWS} 
                renderItem={renderViewItem} 
                keyExtractor={(item) => item.id}/>
        </View> 
    )
};

export default ViewList;

const styles = StyleSheet.create({
    viewContainer: {
        margin: '1%'
    }
})