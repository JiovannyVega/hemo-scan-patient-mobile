import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginNavigator from './HomeStackNavigator';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <LoginNavigator />
        </NavigationContainer>
    );
}
