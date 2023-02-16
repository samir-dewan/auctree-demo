export class HouseViews {
    constructor (
        id,
        name,
        minBedrooms,
        maxBedrooms,
        garden,
        cost,
        POIfilters
    )
    {
        this.id = id,
        this.name = name,
        this.minBedrooms = minBedrooms,
        this.maxBedrooms = maxBedrooms,
        this.garden = garden,
        this.cost = cost,
        this.POIfilters = POIfilters
    }
};

export class POIfilter {
    constructor (
        poiID,
        poi,
        time,
        method
    ) 
    {
        this.poiID = poiID,
        this.poi = poi,
        this.time = time,
        this.method = method
    }
};

