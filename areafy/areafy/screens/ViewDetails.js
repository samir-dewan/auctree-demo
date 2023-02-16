import { useLayoutEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import POICard from '../components/poi/POICard';
import { GlobalStyles } from '../constants/styles';
import Button from '../UI/Button';
import IconButton from '../UI/IconButton';

function ViewDetails({route, navigation}) {
    const viewProps = route.params?.viewProps;
    const isEditing = !!viewProps;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit View' : 'Add View',
        });
    }, [navigation, isEditing]);

    function renderPOIItem(itemData) {
        return (
            <POICard {...itemData.item}/>
        )
    };

    function cancelHandler() {
        return (
            navigation.goBack()
        )
    };

    function deleteViewHandler() {
        return (
            navigation.goBack()
        );
    };

    function confirmView() {
        return (
            navigation.goBack()
        );
    };

    return (
        <View>
            <View>
                <Text>
                    {viewProps.name}
                </Text>
            </View>
            <View>
                <Text>
                    {viewProps.cost}
                </Text>
                <Text>
                    {viewProps.minBedrooms} to {viewProps.maxBedrooms} bedrooms
                </Text>
            </View>
            <View>
                <FlatList 
                data={viewProps.POIfilters}
                renderItem={renderPOIItem}
                keyExtractor={item => item.poiID}/>
            </View>
            <View>
                <Button onPress={confirmView}>{isEditing ? 'Update View' : 'Add View'}</Button>
                <Button onPress={cancelHandler}>Cancel</Button>
                <IconButton icon="trash" color={GlobalStyles.colors.error500} size={32} onPress={deleteViewHandler}/>
            </View>
        </View>
    )
}

export default ViewDetails;