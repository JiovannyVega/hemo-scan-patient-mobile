import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, View, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import styles from './ResultadosScreen.styles';

export default function HomeScreen() {

    const route = useRoute();
    const { analysisData } = route.params || {};

    // data vacía para debug
    DATA = []

    // debugeando que reciba los datos
    useEffect(() => {
        if (analysisData) {
            console.log('datos recibidos en resultadosScreen', analysisData)
        } else {
            console.log('no se recibieron los datos')
        }
    }, [analysisData])



    const renderTable = (data) => (
        <View style={styles.tableView}>
            <View style={styles.header}>
                <Text style={styles.heading}>Parámetro</Text>
                <Text style={styles.heading}>Valor</Text>
                <Text style={styles.heading}>Rango Mínimo</Text>
                <Text style={styles.heading}>Rango Máximo</Text>
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
                    <Text style={styles.textRow}>{item.min_range}</Text>
                    <Text style={styles.textRow}>{item.max_range}</Text>
                    <Text style={styles.textRow}>{item.unit}</Text>
                </View>
            ))}
        </View>
    );

    const FormulaRoja = () => renderTable(DATA);
    const FormulaBlanca = () => renderTable(DATA);
    const FormulaTrombocitica = () => renderTable(DATA);
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