import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B595D',
    },
    dataView: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#184666',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        paddingTop: 20,
    },
    label: {
        color: '#F7F7F7',
        fontWeight: '500',
        lineHeight: 30,
    },
    userLabel: {
        color: '#F7F7F7',
        lineHeight: 30,
    },
    labelView: {
        flex: 1,
        paddingLeft: 50,
    },
    userInfoView: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 50,  
    },
    bodyView: {
        flex: 4,
    }
});
