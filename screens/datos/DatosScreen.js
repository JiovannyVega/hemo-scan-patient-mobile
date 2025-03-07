import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './DatosScreen.styles.js';

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#184666" barStyle="light-content" />
            <View style={styles.dataView}>
                <View style={styles.labelView}>
                    <Text style={styles.label}>Nombre:</Text>
                    <Text style={styles.label}>Fecha de nacimiento:</Text>
                    <Text style={styles.label}>Sexo:</Text>
                    <Text style={styles.label}>Edad:</Text>
                    <Text style={styles.label}>Grupo de edad:</Text>
                </View>
                <View style={styles.userInfoView}>
                    <Text style={styles.userLabel}>Jesus Alberto</Text>
                    <Text style={styles.userLabel}>10/09/2003</Text>
                    <Text style={styles.userLabel}>Masculino</Text>
                    <Text style={styles.userLabel}>21 años</Text>
                    <Text style={styles.userLabel}>Adulto</Text>
                </View>
            </View>
            <View style={styles.bodyView}>
                
            </View>
        </View>
    );
}
