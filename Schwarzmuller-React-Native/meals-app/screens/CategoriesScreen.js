import { CATEGORIES } from '../assets/data/dummy-data';
import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';




function CategoriesScreen({navigation}) {

    function renderCategoryItem(itemData) {
        function pressHandler() {
            console.log('press handled');
            navigation.navigate('MealsOverview')
        };
    
        console.log(itemData.item);
        return (
            <CategoryGridTile 
                title={itemData.item.title} colour={itemData.item.colour}
                onPress={pressHandler}/>
        );
    };

    return (
    <FlatList 
        data={CATEGORIES} 
        keyExtractor={(item) => item.id} 
        key={(item) => item.id}
        numColumns={2}
        renderItem={renderCategoryItem}
    />
    );
};

export default CategoriesScreen;