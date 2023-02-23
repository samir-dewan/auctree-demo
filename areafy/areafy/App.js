import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';

import MapView from './screens/MapView';
import ListView from './screens/ListView';
import PropertyDetails from './screens/PropertyDetails';
import ViewTab from './screens/ViewTab';
import ViewDetails from './screens/ViewDetails';
import PlacesScreen from './screens/PlacesScreen';

import { GlobalStyles } from './constants/styles';
import IconButton from './UI/IconButton';
import {store} from './redux/store';



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
  }
];

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DrawerContent() {
  <DrawerContentScrollView>
    <DrawerItemList />
    <DrawerItem
      label = "hello"
      onPress = {() => console.log("hello")}
      />
  </DrawerContentScrollView>
};

function BottomOverview() {
  return (
  <BottomTabs.Navigator screenOptions={{
    headerShown: false,
    tabBarStyle: {backgroundColor: GlobalStyles.colors.primary400},
    tabBarActiveTintColor: GlobalStyles.colors.primary200,
  }}>
    <BottomTabs.Screen name='MapView' component={MapView} options={{
      title:'Map View',
      tabBarLabel: 'Map',
      tabBarIcon: () => {
        <Ionicons name={'globe'} size={24} color={'white'}/>
        }}}/>
    <BottomTabs.Screen name='ListView' component={ListView} options={{
      title: 'List View',
      tabBarLabel: 'List',
      tabBarIcon: () => {
        <Ionicons name={'menu'} size={24} color={'white'}/>
        }}}/>
    <BottomTabs.Screen name='PlacesScreen' component={PlacesScreen} options={{
      title: 'Places',
      tabBarLabel: 'Places',
      tabBarIcon: () => {
        <Ionicons name={'home'} size={24} color={'white'} />
      }
    }} />
  </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
        <StatusBar style="auto" />
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator screenOptions = {({navigation}) => ({
              headerStyle: {backgroundColor: GlobalStyles.colors.primary200},
              headerRight: () => 
              <IconButton 
              icon="add" 
              size={32} 
              color={GlobalStyles.colors.primary800} 
              onPress={() => navigation.navigate('ViewTab')}/>
            })}>
              <Stack.Screen name='BottomOverview' component={BottomOverview} options={{title: "Areafy"}}/>
              <Stack.Screen name='PropertyDetails' component={PropertyDetails} options={{headerShown: false}}/>
              <Stack.Screen name='ViewTab' component={ViewTab}/>
              <Stack.Screen name='ViewDetails' component={ViewDetails}/>
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
    </>
  );
}
