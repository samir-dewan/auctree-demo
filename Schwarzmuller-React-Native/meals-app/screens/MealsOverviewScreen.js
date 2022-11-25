import {View, Text, StyleSheet} from 'react-native';
import { MEALS } from '../assets/data/dummy-data';


function MealsOverviewScreen({ route }) {
    const catID = route.params.categoryID;

    return (
        <View>
            <Text>Meals Overview Screen - {catID}</Text>
        </View>
    );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})