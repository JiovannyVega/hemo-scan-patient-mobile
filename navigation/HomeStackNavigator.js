import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login/LoginScreen';
import DatosScreen from '../screens/datos/DatosScreen';
import ResultadosScreen from '../screens/resultados/ResultadosScreen';

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerStyle: { backgroundColor: '#1ABC9C', height: 70 },
                headerTintColor: '#FFF',
                headerTitleStyle: { fontSize: 40, fontWeight: 'bold' },
            }}
        >
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="DatosScreen" component={DatosScreen} options={{ title: 'Datos' }}/>
            <Stack.Screen name="ResultadosScreen" component={ResultadosScreen} options={{ title: 'Resultados' }}/>
        </Stack.Navigator>
    );
}
