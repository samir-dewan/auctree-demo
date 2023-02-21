import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import * as Location from 'expo-location';

function Map() {
    const [mapRegion, setMapRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const userLocation = async() => {
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
    }


    return (
        <View style = {styles.mapContainer} >
            <MapView style = {styles.map} 
            region = {mapRegion}>
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
        width: '100%',
        height: '100%'
    }
});

export default Map;