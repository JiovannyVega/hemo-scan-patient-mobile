import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './DatosScreen.styles.js';

export default function HomeScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { userData } = route.params; // Obtener los datos del usuario desde los parámetros
    const [analyses, setAnalyses] = useState([]); // Estado para almacenar los análisis

    // Simular llamada a la API para obtener los análisis
    useEffect(() => {
        const fetchAnalyses = () => {
            const apiResponse = {
                success: true,
                message: "Analyses retrieved successfully",
                data: [
                    {
                        analysis: {
                            id: 1,
                            person_id: 1,
                            lab_id: 2,
                            user_id: 1,
                            date: "2023-10-15T00:00:00.000Z",
                            description: "Análisis de sangre completo",
                            status: "pending"
                        },
                        lab: {
                            id: 2,
                            name: "Lab 2",
                            email: "lab2@example.com",
                            phone: "1234567891",
                            active: true
                        },
                        user: {
                            id: 1,
                            username: "Marisol",
                            email: "marisol@gmail.com",
                            password_hash: "$2b$10$LHQCkbeVZB9fsz38wXeP2uSCku9FhyI44iK6Cs8f/e6xyndTakKpi",
                            lab_id: 1,
                            active: true
                        }
                    },
                    {
                        analysis: {
                            id: 2,
                            person_id: 1,
                            lab_id: 1,
                            user_id: 1,
                            date: "2023-10-15T00:00:00.000Z",
                            description: "Análisis de sangre completo",
                            status: "pending"
                        },
                        lab: {
                            id: 1,
                            name: "Lab 1",
                            email: "lab1@example.com",
                            phone: "1234567890",
                            active: true
                        },
                        user: {
                            id: 1,
                            username: "Marisol",
                            email: "marisol@gmail.com",
                            password_hash: "$2b$10$LHQCkbeVZB9fsz38wXeP2uSCku9FhyI44iK6Cs8f/e6xyndTakKpi",
                            lab_id: 1,
                            active: true
                        }
                    }
                ]
            };

            if (apiResponse.success) {
                setAnalyses(apiResponse.data); // Guardar los análisis en el estado
            }
        };

        fetchAnalyses();
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
                <Text style={styles.textRow}>{new Date(item.analysis.date).toLocaleDateString()}</Text>
                <Text style={styles.textRow}>{item.analysis.description}</Text>
                <Text style={styles.textRow}>{item.lab.name}</Text>
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

                    <View style={[styles.section, styles.rowView]}>
                        <View style={styles.column}>
                            <Text style={styles.label}>CURP</Text>
                            <Text style={styles.value}>{userData.curp}</Text>
                        </View>

                        <View style={styles.column}>
                            <Text style={styles.label}>Correo</Text>
                            <Text style={styles.value}>{userData.email}</Text>
                        </View>
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
                    data={analyses}
                    keyExtractor={(item) => item.analysis.id.toString()}
                    renderItem={renderRow}
                />
            </View>
        </View>
    );
}
