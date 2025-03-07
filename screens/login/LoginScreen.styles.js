import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 600,
        paddingVertical: 10,
    },
    subtitle: {
        fontSize: 20,
        paddingBottom: 40,
    },
    form: {
        alignItems: 'stretch',
        width: '75%',
    },
    formInput: {
        fontSize: 16,
        backgroundColor: '#1B595D',
        color: '#F7F7F7',
        borderRadius: 10,
        paddingLeft: 50,
        height: 50,
    },
    textLink: {
        fontSize: 14,
        color: '#5F0354',
        paddingTop: 10,
        paddingBottom: 20,
        textAlign: 'right',
    },
    btn: {
        alignItems: 'center',
        paddingTop: 50,
    },
    loginBtn: {
        fontSize: 20,
        fontWeight: 500,
        backgroundColor: '#184666',
        borderRadius: 15,
        color: '#F7F7F7',
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 130,
        height: 50,
    }
});
