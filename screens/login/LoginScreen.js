import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './LoginScreen.styles.js';

export default function HomeScreen() {
    const navigation = useNavigation();
    const [curp, onChangeCURP] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const openURL = (url) => {
        Linking.openURL(url).catch((err) => console.error('Ha ocurrido un error', err));
    }

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
                    onChangeText={onChangeCURP}
                    placeholder='Ingrese su CURP'
                    placeholderTextColor='#FFF'
                ></TextInput>

                <TextInput
                    style={styles.formInput}
                    onChangeText={onChangeEmail}
                    placeholder='Ingrese su correo electrónico'
                    placeholderTextColor='#FFF'
                ></TextInput>

                <TouchableOpacity onPress={() => {openURL('https://www.gob.mx/curp/')}}>
                    <Text style={styles.link}>
                        ¿No sabes tu CURP?
                    </Text>
                </TouchableOpacity>

            </View>

            <View style={styles.btnView}>
                <TouchableOpacity 
                    style={styles.submitBtn}
                    onPress={() =>
                        navigation.navigate('DatosScreen')
                    }
                >
                    <Text style={styles.btnText}>
                        Iniciar sesión
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
