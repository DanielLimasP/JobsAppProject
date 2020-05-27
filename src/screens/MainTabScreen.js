import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Record from './Record';
import Map from './Map';
import PostJobs from './PostJobs';

import color from '../styles/colors'

const RecordStack = createStackNavigator();
const MapStack = createStackNavigator();
const JobsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color }) => {
        let iconName;
        if (route.name === 'Record') {
          iconName = 'md-bookmarks';
          color = focused ? color.PRIMARYCOLOR : '#51aadf';
        } else if (route.name === 'Map') {
          iconName = 'md-locate';//md-'somethig' for android logo style
          color = focused ? color.PRIMARYCOLOR : '#51aadf';
        } else {
          iconName = 'ios-briefcase';//ios-'somethig' for ios logo style
          color = focused ? color.PRIMARYCOLOR : '#51aadf';
        }
        // You can return any component that you like here!
        return <Icon name={iconName} size={26} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: color.PRIMARYCOLOR,
      inactiveTintColor: color.SECONDARYCOLOR,
      showIcon: true
    }}
    >
      <Tab.Screen name="Record" component={RecordStackScreen} tabBarColor= {color.WHITE}/>
      <Tab.Screen name="Map" component={MapStackScreen} tabBarColor= {color.WHITE} defa />
      <Tab.Screen name="Jobs" component={PostJobsStackScreen} tabBarColor= {color.WHITE} />
    </Tab.Navigator>
);

export default MainTabScreen;

const RecordStackScreen = ({navigation}) => (
<RecordStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: color.WHITE,
        },
        headerTintColor: color.PRIMARYCOLOR,
        
    }}>
        <RecordStack.Screen name="Home" component={Record} options={{
        title:'Record',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} color={color.SECONDARYCOLOR} backgroundColor={color.WHITE} onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</RecordStack.Navigator>
);

const MapStackScreen = ({navigation}) => (
<MapStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: color.WHITE,
        },
        headerTintColor: color.PRIMARYCOLOR
    }}>
        <MapStack.Screen name="Map" component={Map} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} color={color.SECONDARYCOLOR} backgroundColor={color.WHITE} onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</MapStack.Navigator>
);

const PostJobsStackScreen = ({navigation}) => (
  <JobsStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: color.WHITE,
          },
          headerTintColor: color.PRIMARYCOLOR
      }}>
          <JobsStack.Screen name="Post a Jobs" component={PostJobs} options={{
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} color={color.SECONDARYCOLOR} backgroundColor={color.WHITE} onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </JobsStack.Navigator>
);
  