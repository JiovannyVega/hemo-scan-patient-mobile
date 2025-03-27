import React, { useState } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import styles from './ResultadosScreen.styles';

export default function HomeScreen() {
    // data de ejemplo
    const DATA_ROJA = [
        { id: 1, parameter: 'Eritrocitos (RGBC)', value: 1.00, range: 5.05, unit: 'millones/mL' },
        { id: 2, parameter: 'Hemogoblina (HGB)', value: 1.00, range: 15.50, unit: 'g/dL' },
        { id: 3, parameter: 'Hematrocito (HCT)', value: 1.00, range: 46.00, unit: '%' },
    ];

    const DATA_BLANCA = [
        { id: 1, parameter: 'Leucocitos (WBC)', value: 4.50, range: 11.00, unit: 'mil/mm³' },
        { id: 2, parameter: 'Neutrófilos', value: 60.00, range: 70.00, unit: '%' },
    ];

    const DATA_TROMBOCITICA = [
        { id: 1, parameter: 'Plaquetas', value: 150.00, range: 400.00, unit: 'mil/mm³' },
    ];

    const renderTable = (data) => (
        <View style={styles.tableView}>
            <View style={styles.header}>
                <Text style={styles.heading}>Parámetro</Text>
                <Text style={styles.heading}>Valor</Text>
                <Text style={styles.heading}>Rango</Text>
                <Text style={styles.heading}>Unidad</Text>
            </View>
            {data.map((item, index) => (
                <View
                    key={item.id}
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
            ))}
        </View>
    );

    const FormulaRoja = () => renderTable(DATA_ROJA);
    const FormulaBlanca = () => renderTable(DATA_BLANCA);
    const FormulaTrombocitica = () => renderTable(DATA_TROMBOCITICA);

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'roja', title: 'Fórmula Roja' },
        { key: 'blanca', title: 'Fórmula Blanca' },
        { key: 'trombocitica', title: 'Fórmula Trombocítica' },
    ]);

    const renderScene = SceneMap({
        roja: FormulaRoja,
        blanca: FormulaBlanca,
        trombocitica: FormulaTrombocitica,
    });

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: Dimensions.get('window').width }}
            renderTabBar={(props) => (
                <TabBar
                    {...props}
                    indicatorStyle={{ backgroundColor: '#2B3D50' }}
                    style={{ backgroundColor: '#1ABC9C' }}
                    labelStyle={{ fontSize: 14, fontWeight: 'bold' }}
                />
            )}
        />
    );
}