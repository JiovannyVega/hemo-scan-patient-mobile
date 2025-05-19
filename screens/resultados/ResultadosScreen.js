import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, View, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import styles from './ResultadosScreen.styles';
import axios from 'axios';
import { URL_API } from '@env'; // Importar la URL de la API desde el archivo .env

export default function HomeScreen() {

    const route = useRoute();
    const { userData } = route.params;
    const [analysisResultsData, setAnalysisResultsData] = useState([]);

    // data vacía para debug
    DATA = []

    // debugeando que reciba los datos
    useEffect(() => {
        const fetchAnalysisResultsData = async () => {
            try {
                const apiResponse = await axios.get(`${URL_API}/analysis-results/detailed/${userData.id}`);
                if (apiResponse.data.success) {
                    setAnalysisResultsData(apiResponse.data.data);
                    console.log('Datos de análisis detallados recibidos:', apiResponse.data.data); // Usar directamente la respuesta
                }
            } catch (error) {
                console.error('Error al obtener los resultados de análisis', error);
            }
        };
        fetchAnalysisResultsData();
    }, []);

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
                    <Text style={styles.textRow}>{item.ReferenceValue.Parameter.name}</Text>
                    <Text style={styles.textRow}>{item.value}</Text>
                    <Text style={styles.textRow}>{item.ReferenceValue.min_range}</Text>
                    <Text style={styles.textRow}>{item.ReferenceValue.max_range}</Text>
                    <Text style={styles.textRow}>{item.ReferenceValue.unit}</Text>
                </View>
            ))}
        </View>
    );

    const FormulaRoja = () => renderTable(analysisResultsData.filter(item => item.ReferenceValue.Parameter.formula_id === 1));
    const FormulaBlanca = () => renderTable(analysisResultsData.filter(item => item.ReferenceValue.Parameter.formula_id === 2));
    const FormulaTrombocitica = () => renderTable(analysisResultsData.filter(item => item.ReferenceValue.Parameter.formula_id === 3));
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