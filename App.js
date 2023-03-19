import React from 'react';
import Home from './components/Home';
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator>

        <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color={"#6b49a0"} size={30} />
          ),
        }}
        />

        <Tab.Screen name="Gameboard" component={Gameboard}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="dice-multiple" color={"#6b49a0"} size={30} />
            ),
          }}
        />

        <Tab.Screen name="Scoreboard" component={Scoreboard}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="format-list-numbered" color={"#6b49a0"} size={30} />
            ),
          }}
        />
        
      </Tab.Navigator>

    </NavigationContainer>
  );
}