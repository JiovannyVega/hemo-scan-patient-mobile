import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login/LoginScreen';
import DatosScreen from '../screens/datos/DatosScreen';

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="DatosScreen" component={DatosScreen} options={{
                headerStyle: { backgroundColor: '#184666' },
                headerTintColor: '#F7F7F7',
                headerTitleStyle: { fontSize: 40, fontWeight: 'semibold' },
                title: 'Datos',
            }}/>
        </Stack.Navigator>
    );
}
