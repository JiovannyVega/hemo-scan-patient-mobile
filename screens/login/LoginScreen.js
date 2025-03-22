import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './LoginScreen.styles.js';

export default function HomeScreen() {
    const [curp, onChangeCURP] = React.useState('');
    const [email, onChangeEmail] = React.useState('');

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

                <TouchableOpacity>
                    <Text style={styles.link}>
                        ¿No sabes tu CURP?
                    </Text>
                </TouchableOpacity>

            </View>

            <View style={styles.btnView}>
                <TouchableOpacity style={styles.submitBtn}>
                    <Text style={styles.btnText}>
                        Iniciar sesión
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
