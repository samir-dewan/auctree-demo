import {View, Text, Pressable, Image, StyleSheet, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealDetails from './MealDetails';

function MealItem(id, title, imageurl, duration, complexity, affordability) {
    const navigation = useNavigation();
    function pressHandler() {
        navigation.navigate('MealDetails', {
            mealID: id,
        })
    }

    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color: '#ccc'}} 
            onPress = {pressHandler}
            style={({pressed}) => 
                pressed ? styles.buttonPressed : null
            }>
                <View>
                    <View>
                        <Image style={styles.image} source={{uri: imageurl}} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: {height: 2, width: 2},
        shadowRadius: 8,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    buttonPressed: {
        opacity: 0.5,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
})