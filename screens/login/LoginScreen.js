import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './LoginScreen.styles.js';

export default function HomeScreen() {
    const navigation = useNavigation();
    const [curp, onChangeCURP] = React.useState('');
    const [email, onChangeEmail] = React.useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Inicia sesión</Text>
            <Text style={styles.subtitle}>Ingresa tus datos a continuación</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.formInput}
                    onChangeText={onChangeCURP}
                    value={curp}
                    placeholder='Ingresa tu CURP'
                    placeholderTextColor='#C5C5C5'
                    autoCapitalize='characters'
                />
                <TouchableOpacity
                    onPress={() => {
                        // Ir a página de consulta tu CURP
                    }}
                >
                    <View>
                        <Text style={styles.textLink}>Consulta tu CURP</Text>
                    </View>
                </TouchableOpacity>
                <TextInput
                    style={styles.formInput}
                    onChangeText={onChangeEmail}
                    value={email}
                    placeholder='Ingresa tu correo electrónico'
                    placeholderTextColor='#C5C5C5'
                    autoCapitalize='none'
                    keyboardType='email-address'
                />
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('DatosScreen');
                    }}
                >
                    <View style={styles.btn}>
                        <Text style={styles.loginBtn}>Ingresar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
