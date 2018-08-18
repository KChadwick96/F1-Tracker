import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import Home from './screens/Home';

export default createBottomTabNavigator({
    Home,
    Season: () => <View><Text>Season</Text></View>,
    Standings: () => <View><Text>Standings</Text></View>
}, {
    navigationOptions: ({ navigation}) => ({
        tabBarIcon: ({ tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
                iconName = "home";
            } else if (routeName === 'Season') {
                iconName = "calendar";
            } else if (routeName === 'Standings') {
                iconName = "grid";
            }

            return <Ionicons name={`ios-${iconName}`} size={25} color={tintColor} />
        }
    }),
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: 'white'
        }
    }
});