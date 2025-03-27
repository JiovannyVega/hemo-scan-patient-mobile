import React, { useState } from 'react';
import { View, Text, StatusBar, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './DatosScreen.styles.js';

export default function HomeScreen() {
    const navigation = useNavigation();       

    // data de ejemplo
    const people = [
        { name: 'pepito', id: 1 },
        { name: 'pablito', id: 2 },
        { name: 'juanito', id: 3 },
        { name: 'chonito', id: 4 },
        { name: 'chuchito', id: 5 },
    ]

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#EDF1F2" barStyle="dark-content" />
            <View style={styles.dataView}>
                
                <View style={styles.listView}>
                    <FlatList 
                        data = {people}
                        renderItem={({ item }) => (
                            <Text style={styles.item}>{item.name}</Text>
                        )}
                    />
                </View>
                
            </View>

            <View style={styles.tableView}>
                
            </View>
        </View>
    );
}
