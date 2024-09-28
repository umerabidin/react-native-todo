import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../src/screens/home/HomeScreen';
import TaskScreen from './screens/task/task_screen';
import LogoutScreen from '../src/screens/community/community_screen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#05243E',
        },
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#05243E',
        },
        tabBarHideOnKeyboard: true, 
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Task"
        component={TaskScreen}
        options={{
          tabBarLabel: 'Task',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          tabBarLabel: 'Logout',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="logout" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function BottomNavigationScreen() {
  return (
    <MyTabs />
  );
}
