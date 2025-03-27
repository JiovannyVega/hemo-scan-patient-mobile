import React, { useState } from 'react';
import { View, Text, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './DatosScreen.styles.js';

export default function HomeScreen() {
    const navigation = useNavigation();       

    // data de ejemplo
    const DATA = [
        { id: 1, name: 'Jesus', analysisDate: '10/01/2025' },
        { id: 2, name: 'Jesus', analysisDate: '10/01/2025' },
        { id: 3, name: 'Jesus', analysisDate: '10/01/2025' },
        { id: 4, name: 'Jesus', analysisDate: '10/01/2025' },
        { id: 5, name: 'Jesus', analysisDate: '10/01/2025' },
        { id: 6, name: 'Jesus', analysisDate: '10/01/2025' },
        { id: 7, name: 'Jesus', analysisDate: '10/01/2025' },
    ]

    // crea un boton por cada item y alterna colores
    const renderRow = ({ item, index }) => (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('ResultadosScreen')
            }
        >
            <View
                style={[
                    styles.row,
                    { backgroundColor: index % 2 === 0 ? '#BDC3C7' : '#A8BFCE' },
                ]}
            >
                <Text style={styles.textRow}>{item.name}</Text>
                <Text style={styles.textRow}>{item.analysisDate}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#EDF1F2" barStyle="dark-content" />
            <View style={styles.dataView}>
                
                <View style={styles.listView}>
                    <View style={styles.section}>
                        <Text style={styles.label}>Nombre</Text>
                        <Text style={styles.value}>Nombre persona</Text>
                    </View>
                    
                    <View style={styles.section}>
                        <Text style={styles.label}>Fecha de nacimiento</Text>
                        <Text style={styles.value}>01/01/2000</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.label}>Sexo</Text>
                        <Text style={styles.value}>Sexo persona</Text>
                    </View>
                    <View style={[styles.section, styles.rowView]}>
                        <View style={styles.column}>
                            <Text style={styles.label}>Edad</Text>
                            <Text style={styles.value}>Edad persona</Text>
                        </View>
                        
                        <View style={styles.column}>
                            <Text style={styles.label}>Grupo de edad</Text>
                            <Text style={styles.value}>Grupo persona</Text>
                        </View>
                        
                    </View>

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
