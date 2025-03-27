import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // estilo de contenedor general
    container: {
        flex: 1,
        backgroundColor: '#EDF1F2',
    },

    // estilo de contenedores
    dataView: {
        flex: 0.8,
        backgroundColor: '#FFF',
        borderRadius: 20,
        paddingVertical: 10,
        marginVertical: 20,
        margin: 15,
        elevation: 10,
    },

    listView: {
        flex: 1,
        margin: 20,
    },

    tableView: {
        flex: 1,
    },

    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
    },

    section: {
        borderTopWidth: 1,
        paddingVertical: 10,
    },

    // estilo de textos
    label: {
        fontWeight: 600,
        fontSize: 14,
    },

    value: {
        fontSize: 14,
        marginTop: 4,
    },

    // estilo de FlatList
    header: {
        flexDirection: 'row',
        paddingVertical: 20,
    },

    heading: {
        flex: 1,
        fontSize: 14,
        fontWeight: 600,
        textAlign: 'center',
    },

    row: {
        flexDirection: 'row',
        paddingVertical: 20,
    },

    textRow: {
        flex: 1,
        fontSize: 14,
        textAlign: 'center',
    },
});
