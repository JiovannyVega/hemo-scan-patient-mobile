import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // estilo de contenedor general
    container: {
        flex: 1,
        marginTop: 100,
    },

    // estilo de contenedores
    welcomeView: {
        flex: 1,
        alignSelf: 'center',
        width: '80%',
    },

    form: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    btnView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 40,
    },

    // estilo de textos
    title: {
        fontSize: 48,
        paddingBottom: 20,
    },

    subtitle: {
        fontSize: 24,
    },

    text: {
        fontSize: 18,
    },

    // estilo de componentes extra
    formInput: {
        backgroundColor: '#CFCFCF',
        borderRadius: 10,
        fontSize: 16,
        paddingLeft: 40,
        height: 50,
        width: '80%',
    },

    link: {
        textAlign: 'center',
    },

    submitBtn: {
        backgroundColor: '#CFCFCF',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: '80%',
    },
});
