import Place from '../models/place';
import Property from '../models/property';
import Review from '../models/review';
import { HouseView, POIfilter } from '../models/view';

export const PROPERTIES = [
    new Property('e1', 74, 'Cavendish Road', 'Colliers Wood', 'place1', 'SW19 2EU', 800000, 'Eddison White', new Date('2022-06-06')),
    new Property('e2', 37, 'Devonshire Road', 'Colliers Wood', 'place1', 'SW19 2AG', 675000, 'Eddison White', new Date('2022-04-01')),
    new Property('e3', 16, 'Carleton Avenue', 'Wallington', 'place2', 'SM6 9LN', 1000000, 'Cromwells', new Date('2023-01-05'))
];

export const HOUSEVIEWS = [
    new HouseView('view1', 'dream house', 4, 5, true, 650000, 950000, ['view1poi1', 'view1poi2', 'view1poi3']),
    new HouseView('view2', 'option B house', 2, 3, false, 350000, 450000, ['view2poi1', 'view2poi2', 'view2poi3']),
    new HouseView('view3', 'option C house', 2, 2, false, 200000, 300000, ['view3poi1', 'view3poi2', 'view3poi3'])
];

export const POIFILTERS = [
    new POIfilter('view1poi1', 'school', 30, 'walk'),
    new POIfilter('view1poi2', 'church', 45, 'public'),
    new POIfilter('view1poi3', 'SE5 2XS', 45, 'drive'),
    new POIfilter('view2poi1', 'school', 45, 'walk'),
    new POIfilter('view2poi2', 'church', 60, 'public'),
    new POIfilter('view2poi3', 'SE52XS', 60, 'drive'),
    new POIfilter('view3poi1', 'school', 45, 'walk'),
    new POIfilter('view3poi2', 'church', 60, 'public'),
    new POIfilter('view3poi3', 'SE5 2XS', 90, 'drive')
];

export const PLACES = [
    new Place('place1', 'Colliers Wood', 5),
    new Place('place2', 'Croydon', 4),
    new Place('place3', 'Wallington', 3)
];

export const REVIEWS = [
    new Review('review1', 'user1', 'catherine_blanchfield', 'place1', 5, 'This place is the bomb.')
];