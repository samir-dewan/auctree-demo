import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Button, Dimensions} from 'react-native';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

function Map() {
    const [mapRegion, setMapRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    useEffect(() => {
        const fetchData = async() => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission for location denied');
            }
            let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
            setMapRegion(
                {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
                }
            )
        };

        fetchData().catch(console.error);
    })


    return (
        <View style = {styles.mapContainer} >
            <MapView style = {styles.map} 
            initialRegion = {mapRegion}>
                <Marker 
                    coordinate={mapRegion} title='hello' 
                />
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    mapContainer: {
        flex: 1,
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});

export default Map;