import { StyleSheet, Pressable, View, Text } from "react-native";

function Button({children, onPress}) {
    return (
        <View>
            <Pressable onPress={onPress}>
                <View>
                    <Text>
                        {children}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

export default Button;

const styles = StyleSheet.create({

});