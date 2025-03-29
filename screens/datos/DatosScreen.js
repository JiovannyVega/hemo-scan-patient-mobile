import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './DatosScreen.styles.js';
import { URL_API } from '@env'; // Importar la URL de la API desde el archivo .env
import axios from 'axios';

export default function HomeScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { userData } = route.params; // Obtener los datos del usuario desde los parámetros
    const [analysis, setAnalysis] = useState([]); // Estado para almacenar los análisis

    // Simular llamada a la API para obtener los análisis
    useEffect(async () => {
        const apiResponse = await axios.get(`${URL_API}/analysis/person/${userData.id}/with-lab`); // Llamada a la API para obtener los análisis
        if (apiResponse.data.success) { // Cambiar a apiResponse.data.success
            setAnalysis(apiResponse.data.data); // Guardar los análisis en el estado
        }
    }, []);

    // Renderizar cada fila de la tabla
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
                <Text style={styles.textRow}>{new Date(item.date).toLocaleDateString()}</Text>
                <Text style={styles.textRow}>{item.description}</Text>
                <Text style={styles.textRow}>{item.lab_name}</Text>
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
                        <Text style={styles.value}>{`${userData.first_name} ${userData.last_name}`}</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.label}>Fecha de nacimiento</Text>
                        <Text style={styles.value}>{new Date(userData.birth_date).toLocaleDateString()}</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.label}>Sexo</Text>
                        <Text style={styles.value}>{userData.gender === 'M' ? 'Masculino' : 'Femenino'}</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.label}>CURP</Text>
                        <Text style={styles.value}>{userData.curp}</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.label}>Correo</Text>
                        <Text style={styles.value}>{userData.email}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.tableView}>
                <View style={styles.header}>
                    <Text style={styles.heading}>Fecha</Text>
                    <Text style={styles.heading}>Descripción</Text>
                    <Text style={styles.heading}>Laboratorio</Text>
                </View>
                <FlatList
                    data={analysis}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderRow}
                />
            </View>
        </View>
    );
}
