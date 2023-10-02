import { Pressable, View, Text } from "react-native";

function placePressHandler() {
    
};

function PlacesCard({id}) {
    return (
        <Pressable onPress={placePressHandler}>
            <View>
                <Text>
                    {id}
                </Text>
            </View>
        </Pressable>
    )
};

export default PlacesCard;