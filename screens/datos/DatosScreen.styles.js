import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // estilo de contenedor general
    container: {
        flex: 1,
        backgroundColor: '#EDF1F2',
    },

    // estilo de contenedores
    dataView: {
        flex: 1,
        backgroundColor: '#FFF',
        borderRadius: 20,
        margin: 20,
        elevation: 10,
    },

    listView: {
        flex: 1,
        margin: 20,
    },

    tableView: {
        flex: 1,
    },

    // estilo de FlatList
    header: {
        flexDirection: 'row',
        padding: 20,
    },

    heading: {
        flex: 1,
        fontSize: 14,
        fontWeight: 600,
    },
    
    item: {
        backgroundColor: 'lightblue',
        padding: 15,
        marginTop: 10,
    },

    row: {
        flexDirection: 'row',
        padding: 20,
    },

    textRow: {
        flex: 1,
        fontSize: 14,
    },
});
