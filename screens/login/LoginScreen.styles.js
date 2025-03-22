import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // estilo de contenedor general
    container: {
        flex: 1,
        paddingTop: 100,
        backgroundColor: '#EDF1F2'
    },

    // estilo de contenedores
    welcomeView: {
        flex: 7,
        alignSelf: 'center',
        width: '80%',
    },

    form: {
        flex: 7,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingBottom: 20,
        margin: 20,
        borderRadius: 20,
        elevation: 10,
        backgroundColor: '#FFF'
    },

    btnView: {
        flex: 8,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 20,
    },

    // estilo de textos
    title: {
        fontSize: 48,
    },

    customTitle : {
        fontSize: 48,
        fontWeight: 600,
        color: '#2B3D50',
        paddingBottom: 20,
    },

    subtitle: {
        fontSize: 24,
    },

    text: {
        fontSize: 18,
    },

    btnText: {
        color: '#FFF',
        fontSize: 24,

    },

    // estilo de componentes extra
    formInput: {
        color: '#FFF',
        backgroundColor: '#1ABC9C',
        borderRadius: 5,
        fontSize: 16,
        paddingLeft: 40,
        height: 50,
        width: '90%',
    },

    link: {
        textAlign: 'center',
    },

    submitBtn: {
        backgroundColor: '#2B3D50',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: '80%',
    },
});
