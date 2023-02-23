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