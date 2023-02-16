import { useDispatch, useSelector } from "react-redux"
import { PROPERTIES } from "../data/dummy-data";
import { addFavourite, removeFavourite } from "../redux/favourites";

function FavouritesScreen({route, navigation}) {
    const favouritePropertyIds = useSelector((state) => {state.favourites.ids});
    const dispatch = useDispatch();

    const propertyId = route.params.id;
    const selectedProperty = PROPERTIES.find((property) => {property.id === propertyId});

    const isFavouriteProperty = favouritePropertyIds.includes(propertyId);

    function changeFavouriteStatusHandler() {
        if (isFavouriteProperty) {
            dispatch(removeFavourite({id: propertyId}));
        } else {
            dispatch(addFavourite({id: propertyId}));
        }
    };

    
}