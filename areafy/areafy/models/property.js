class Property {
    constructor
    (
        id,
        addressNumber,
        roadName,
        city,
        place_id,
        postcode,
        price,
        estateAgent,
        datePosted
    )
    {
        this.id = id,
        this.addressNumber = addressNumber,
        this.roadName = roadName,
        this.city = city,
        this.place_id = place_id,
        this.postcode = postcode,
        this.price = price,
        this.estateAgent = estateAgent,
        this.datePosted = datePosted
    }
};

export default Property;