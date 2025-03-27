import React from 'react';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './ResultadosScreen.styles';

export default function HomeScreen() {

    // data de ejemplo
    const DATA = [
        {id: 1, 'parameter': 'Eritrocitos (RGBC)', 'value': 1.00, 'range': 5.05, 'unit': 'millones/mL'},
        {id: 2, 'parameter': 'Hemogoblina (HGB)', 'value': 1.00, 'range': 15.50, 'unit': 'g/dL'},
        {id: 3, 'parameter': 'Hematrocito (HCT)', 'value': 1.00, 'range': 46.00, 'unit': '%'},
        {id: 4, 'parameter': 'MCV (VCM)', 'value': 1.00, 'range': 90.00, 'unit': 'fL'},
        {id: 5, 'parameter': 'MCH (HCM)', 'value': 1.00, 'range': 29.50, 'unit': 'pg'},
    ]

    const renderRow = ({ item, index }) => (
        <View
            style={[
                styles.row,
                { backgroundColor: index % 2 === 0 ? '#BDC3C7' : '#A8BFCE' },
            ]}
        >
            <Text style={styles.textRow}>{item.parameter}</Text>
            <Text style={styles.textRow}>{item.value}</Text>
            <Text style={styles.textRow}>{item.range}</Text>
            <Text style={styles.textRow}>{item.unit}</Text>
        </View>
    );

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.dataView}>
                <View style={styles.listView}>
                    <View style={styles.section}>
                        <Text style={styles.label}>Nombre</Text>
                        <Text style={styles.value}>Nombre persona</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.label}>Fecha de análisis</Text>
                        <Text style={styles.value}>01/01/2000</Text>
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
                <Text style={styles.title}>Fórmula roja</Text>
                <View style={styles.header}>
                    <Text style={styles.heading}>Parámetro</Text>
                    <Text style={styles.heading}>Valor</Text>
                    <Text style={styles.heading}>Rango</Text>
                    <Text style={styles.heading}>Unidad</Text>
                </View>
                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={renderRow}
                />
            </View>

            <View style={styles.tableView}>
                <Text style={styles.title}>Fórmula blanca</Text>
                <View style={styles.header}>
                    <Text style={styles.heading}>Parámetro</Text>
                    <Text style={styles.heading}>Valor</Text>
                    <Text style={styles.heading}>Rango</Text>
                    <Text style={styles.heading}>Unidad</Text>
                </View>
                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={renderRow}
                />
            </View>

            <View style={styles.tableView}>
                <Text style={styles.title}>Fórmula trombocítica</Text>
                <View style={styles.header}>
                    <Text style={styles.heading}>Parámetro</Text>
                    <Text style={styles.heading}>Valor</Text>
                    <Text style={styles.heading}>Rango</Text>
                    <Text style={styles.heading}>Unidad</Text>
                </View>
                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={renderRow}
                />
            </View>

            <View style={styles.btnView}>
                <TouchableOpacity
                    style={styles.submitBtn}
                >
                    <Text style={styles.btnText}>
                        Agregar valores de referencia
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}