import {Text, Image, StyleSheet, ScrollView} from 'react-native';
import { useLayoutEffect } from 'react';
import {MEALS} from '../assets/data/dummy-data';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import IconButton from '../components/IconButton';

function MealDetailsScreen({route, navigation}) {
    const mealID = route.params.mealID;

    const selectedMeal = MEALS.find((meal) => meal.id === mealID)
    
    function headerButtonPressHandler() {
        console.log('Pressed!');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton name='star' color='white' onPress={headerButtonPressHandler} />
            }
        })
    }, [navigation, headerButtonPressHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
            <Text>{selectedMeal.title}</Text>
            <MealDetails 
            duration={selectedMeal.duration} 
            complexity={selectedMeal.complexity} 
            affordability={selectedMeal.affordability} 
            textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.subtitleContainer}>
                    <Subtitle>Ingredients: </Subtitle>
                        <List data={selectedMeal.ingredients}/>
                    <Subtitle>Steps: </Subtitle>
                        <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: "100%",
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    subtitleContainer: {
        maxWidth: '80%'
    },
    listOuterContainer: {
        textAlign: 'center',
    }
})