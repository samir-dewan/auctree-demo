import {View, Image, Text, StyleSheet, Dimensions, useWindowDimensions} from 'react-native';
import Title from '../components/ui/Title';
import colours from '../constants/colours';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOver({roundsNumber, userNumber, onRestart}) {

    const {width, height} = useWindowDimensions();
    const imageSize = 300;

    if (width < 300 || height < 400) {
        imageSize = 150;
    }

    const imageStyle = {
        height: imageSize,
        width: imageSize,
        borderRadius: imageSize / 2,
    };

    return <View style={styles.rootContainer}>
        <Title> Game Over!</Title>
        <View style={styles.imageContainer}>
            <Image style={[styles.image && imageStyle]} source={require("../assets/icon.png")}/>
        </View>
        <View>
            <Text style={styles.summaryText}>Your phone needed 
                <Text style={styles.highlightText}> {roundsNumber} </Text> 
                rounds to guess the number 
                <Text style={styles.highlightText}> {userNumber} </Text>.</Text>
        </View>
        <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
    </View>
}

export default GameOver;

const deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        // borderRadius: 150,
        // width: deviceWidth < 380 ? 200 : 300,
        // height: deviceWidth < 380 ? 200 : 300,
        overflow: 'hidden',
        margin: 36,
        borderWidth: 3,
        borderColor: colours.primary800,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        marginBottom: 24,
        textAlign: 'center',
    },
    highlightText: {
        fontFamily: 'open-sans-bold',
        color: colours.primary500,

    }
})