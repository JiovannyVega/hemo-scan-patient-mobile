import React, { useState } from 'react';
import { View, Text, StatusBar, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './DatosScreen.styles.js';

export default function HomeScreen() {
    const navigation = useNavigation();       

    // data's de ejemplo
    const people = [
        { name: 'pepito', id: 1 },
        { name: 'pablito', id: 2 },
        { name: 'juanito', id: 3 },
        { name: 'chonito', id: 4 },
        { name: 'chuchito', id: 5 },
    ]

    const DATA = [
        { id: 1, "name": 'Jesus', "analysisDate": '10/01/2025' },
        { id: 2, "name": 'Jesus', "analysisDate": '10/01/2025' },
        { id: 3, "name": 'Jesus', "analysisDate": '10/01/2025' },
        { id: 4, "name": 'Jesus', "analysisDate": '10/01/2025' },
        { id: 5, "name": 'Jesus', "analysisDate": '10/01/2025' },
        { id: 6, "name": 'Jesus', "analysisDate": '10/01/2025' },
        { id: 7, "name": 'Jesus', "analysisDate": '10/01/2025' },
    ]

    const renderRow = ({ item, index }) => (
        <View
            style={[
                styles.row,
                { backgroundColor: index % 2 === 0 ? 'lightblue' : 'lightyellow'},
            ]}
        >
            <Text style={styles.textRow}>{item.name}</Text>
            <Text style={styles.textRow}>{item.analysisDate}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#EDF1F2" barStyle="dark-content" />
            <View style={styles.dataView}>
                
                <View style={styles.listView}>
                    <FlatList 
                        data={people}
                        renderItem={({ item }) => (
                            <Text style={styles.item}>{item.name}</Text>
                        )}
                    />
                </View>
                
            </View>

            <View style={styles.tableView}>
                <View style={styles.header}>
                    <Text style={styles.heading}>Nombre</Text>
                    <Text style={styles.heading}>Fecha de análisis</Text>
                </View>
                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={renderRow}
                />
            </View>
        </View>
    );
}
