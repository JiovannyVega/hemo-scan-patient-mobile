import { StyleSheet } from "react-native";

export default StyleSheet.create({
    // estilo de contenedor general
    container: {
        flex: 1,
        backgroundColor: '#EDF1F2',
    },

    // estilo de contenedores
    dataView: {
        flex: 0.6,
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
        marginBottom: 20,
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

    btnView: {
        flex: 8,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 20,
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

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2B3D50',
        textAlign: 'center',
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
        textAlign: 'center',
    },

    row: {
        flexDirection: 'row',
        padding: 20,
    },

    textRow: {
        flex: 1,
        fontSize: 14,
        textAlign: 'center',
    },

    btnText: {
        color: '#FFF',
        fontSize: 20,
    },

    // estilo de componentes extra
    submitBtn: {
        backgroundColor: '#2B3D50',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: '80%',
    },
})