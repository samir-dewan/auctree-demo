import {View, Text, StyleSheet, FlatList} from 'react-native';
import { useLayoutEffect } from 'react';
import { CATEGORIES, MEALS } from '../assets/data/dummy-data';
import MealItem from '../components/MealItem';


function MealsOverviewScreen({ route, navigation }) {
    function renderMealItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealDetails', {
                categoryID: itemData.item.id,
            })
        }
    }

    const catID = route.params.categoryID;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catID) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => {category.id === catID}).title;
        navigation.setOptions({
        title: categoryTitle
    });
    }, [catID, navigation]);

    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        }
        return <MealItem {...mealItemProps}/>
    };
    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} 
            keyExtractor={(item) => item.id}
            renderItem = {
                renderMealItem
            }/>
        </View>
    );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})