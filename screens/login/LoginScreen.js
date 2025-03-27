import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Linking, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
        // Simular respuesta de la API
        return new Promise((resolve) => {
            const apiResponse = {
                success: true,
                message: "Person retrieved successfully",
                data: {
                    id: 1,
                    first_name: "Juan",
                    last_name: "Perez",
                    birth_date: "1990-01-01T00:00:00.000Z",
                    gender: "M",
                    curp: "GAVE010726HNEMGRA7",
                    email: "juan.perez@example.com",
                    phone: "8123943808"
                }
            };

            if (apiResponse.success) {
                setUserData(apiResponse.data); // Guardar los datos en el estado
                resolve(apiResponse); // Resolver la promesa con la respuesta simulada
            } else {
                resolve({ success: false, message: "No se pudo obtener la información del usuario." });
            }
        });
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
                            navigation.navigate('DatosScreen', { userData: response.data }); // Navegar con los datos del usuario
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
