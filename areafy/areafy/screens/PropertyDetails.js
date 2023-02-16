import { View, Text } from 'react-native';

function PropertyDetails({route}) {
    const propertyProps = route.params?.propertyProps;
    const isEditing = !!propertyProps;

    return (
        <View>
            <View>
                <Text>
                    {propertyProps.addressNumber} 
                </Text>
                <Text>
                    {propertyProps.roadName}
                </Text>
                <Text>
                    {propertyProps.postcode}
                </Text>
            </View>
            <View>
                <Text>
                    {propertyProps.price}
                </Text>
            </View>
            <View>
                <Text>
                    {propertyProps.estateAgent}
                </Text>
            </View>
        </View>
    )
}

export default PropertyDetails;