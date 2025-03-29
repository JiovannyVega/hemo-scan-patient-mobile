import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Linking, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { URL_API } from '@env';
import styles from './LoginScreen.styles.js';

export default function HomeScreen() {
    const navigation = useNavigation();
    const [curp, setCurp] = useState('');
    const [email, setEmail] = useState('');
    const [userData, setUserData] = useState(null); // Estado para almacenar los datos del usuario

    const openURL = (url) => {
        Linking.openURL(url).catch((err) => console.error('Ha ocurrido un error', err));
    };

    const fetchUserData = async () => {
        try {
            const response = await axios.post(`${URL_API}/person/login`, { curp, email });
            if (response.data && response.data.success) {
                setUserData(response.data);
                return { success: true, data: response.data }; // Retornar los datos correctamente
            } else {
                return { success: false, message: response.data?.message || "No se pudo obtener la información del usuario." };
            }
        } catch (error) {
            console.error("Error al llamar a la API:", error);
            return { success: false, message: "Ocurrió un error al comunicarse con el servidor." };
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.welcomeView}>
                <Text style={styles.title}>
                    Bienvenido a
                </Text>

                <Text style={styles.customTitle}>
                    HemoScan
                </Text>

                <Text style={styles.subtitle}>
                    Inicie sesión para continuar
                </Text>
            </View>

            <View style={styles.form}>
                <TextInput
                    style={styles.formInput}
                    onChangeText={setCurp}
                    placeholder={'Ingrese su CURP'} // Usar el CURP del usuario como placeholder
                    placeholderTextColor='#FFF'
                    value={curp}
                />

                <TextInput
                    style={styles.formInput}
                    onChangeText={setEmail}
                    placeholder={'Ingrese su correo electrónico'} // Usar el email del usuario como placeholder
                    placeholderTextColor='#FFF'
                    value={email}
                />

                <TouchableOpacity onPress={() => openURL('https://www.gob.mx/curp/')}>
                    <Text style={styles.link}>
                        ¿No sabes tu CURP?
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.btnView}>
                <TouchableOpacity
                    style={styles.submitBtn}
                    onPress={async () => {
                        const response = await fetchUserData(); // Esperar la respuesta de la "API"
                        if (response.success) {
                            navigation.navigate('DatosScreen', { userData: response.data.data }); // Corregir para pasar los datos del usuario
                        } else {
                            Alert.alert("Error", response.message);
                        }
                    }}
                >
                    <Text style={styles.btnText}>
                        Iniciar sesión
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
