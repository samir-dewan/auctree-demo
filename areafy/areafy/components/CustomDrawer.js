
import { createDrawerNavigator, DrawerContentScrollView} from '@react-navigation/drawer';
import { FlatList } from 'react-native';
import ViewDrawerItem from './view/ViewDrawerItem';
import DrawerView from './view/DrawerView';

const DUMMY_VIEWS = [
    {
        id: 'view1',
        name: 'dream house',
        minBedrooms: 4,
        maxBedrooms: 5,
        garden: true,
        cost: 950000,
        POIfilters: [
            {
                poiID: 'view1poi1', poi: 'school', time: 30, method: 'walk'
            },
            {
                poiID: 'view1poi2', poi: 'church', time: 45, method: 'public'
            },
            {
                poiID: 'view1poi3', poi: 'SE5 2XS', time: 45, method: 'drive'
            }
        ]
    },
    {
        id: 'view2',
        name: 'option B house',
        minBedrooms: 2,
        maxBedrooms: 3,
        garden: false,
        cost: 450000,
        POIfilters: [
            {
                poiID: 'view2poi1', poi: 'school', time: 45, method: 'walk'
            },
            {
                poiID: 'view2poi2', poi: 'church', time: 60, method: 'public'
            },
            {
                poiID: 'view2poi3', poi: 'SE5 2XS', time: 60, method: 'drive'
            }
        ]
    },
    {
        id: 'view3',
        name: 'option C house',
        minBedrooms: 2,
        maxBedrooms: 2,
        garden: false,
        cost: 300000,
        POIfilters: [
            {
                poiID: 'view3poi1', poi: 'school', time: 45, method: 'walk'
            },
            {
                poiID: 'view3poi2', poi: 'church', time: 90, method: 'public'
            },
            {
                poiID: 'view3poi3', poi: 'SE5 2XS', time: 90, method: 'drive'
            }
        ]
    }
];

const Drawer = createDrawerNavigator();


function CustomDrawer() {


    function renderViewDrawerItem(itemData) {
        return (
            <ViewDrawerItem {...itemData.item} />
        )
    }

    return (
        <DrawerContentScrollView>
           <FlatList data={DUMMY_VIEWS}
           renderItem={renderViewDrawerItem}
           keyExtractor = {(item) => item.id}/>
        </DrawerContentScrollView>
    )
};

export default CustomDrawer;