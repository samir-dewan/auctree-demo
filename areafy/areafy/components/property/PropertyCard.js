import { Text, View, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../../redux/favourites";
import { PROPERTIES } from "../../data/dummy-data";
import { GlobalStyles } from "../../constants/styles";



function PropertyCard({id}) {

    const propertyId = id;
    const selectedProperty = PROPERTIES.find((property) => property.id === propertyId);
    const navigation = useNavigation();
    const favouritesSelector = useSelector((state) => state.favourites.ids);
    const dispatch = useDispatch();
    const propertyIsFavourite = favouritesSelector.includes(propertyId);

    function changeFavouriteStatusHandler() {
        if (propertyIsFavourite) {
            dispatch(removeFavourite({ids: selectedProperty.id}));
        } else {
        dispatch(addFavourite({ids: selectedProperty.id}))
        }
    };

    function cardPressHandler() {
        navigation.navigate('PropertyDetails', {
            propertyProps: selectedProperty
        });
    }


    return (
        <Pressable onPress={cardPressHandler}>
            <View style={styles.cardContainer}>
                <View style={styles.cardImage}>
                    <Text>
                        {selectedProperty.image}
                    </Text>
                </View>
                <View style={styles.cardDetails}>
                    <View>
                        <Text>
                            {selectedProperty.addressNumber} {selectedProperty.roadName}
                        </Text>
                    </View>
                    <Text>
                        £ {selectedProperty.price}
                    </Text>
                    <Text>
                        % Match
                    </Text>
                </View>
                <Pressable style={styles.cardButton}>
                    <View>
                        <Ionicons name={"heart"} color={'red'} onPress={changeFavouriteStatusHandler}/>
                    </View>
                </Pressable>
            </View>
        </Pressable>
    )
}

export default PropertyCard;

const styles = StyleSheet.create({
    card: {
        flex: 2,
        minHeight: '50%'
    },
    cardContainer: {
        flexDirection: 'row',
        padding: '1%',
        justifyContent: 'space-around',
        minHeight: '33%'
    },
    cardImage: {
        flex: 2,
        borderRadius: 1,
        backgroundColor: GlobalStyles.colors.gray500,
        width: '9%',
        borderRadius: 10,
    },
    cardDetails: {
        flex: 5,
        paddingLeft: '3%',
    },
    cardButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.gray500,
        flex: 1.1,
        borderRadius: 20,
    }
})