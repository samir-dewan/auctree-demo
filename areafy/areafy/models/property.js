class Property {
    constructor(
        id,
        addressNumber,
        roadName,
        postcode,
        price,
        estateAgent,
        datePosted
    )
    {
        this.id = id,
        this.addressNumber = addressNumber,
        this.roadName = roadName,
        this.postcode = postcode,
        this.price = price,
        this.estateAgent = estateAgent,
        this.datePosted = datePosted
    }
};

export default Property;