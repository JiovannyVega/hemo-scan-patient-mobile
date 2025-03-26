import React from 'react';
import { View, Text, StatusBar, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './DatosScreen.styles.js';

export default function HomeScreen() {
    const navigation = useNavigation();

    const data = [
        {
            id: 1,
            title: 'First item'
        },
        {
            id: 2,
            title: 'Second item'
        }
    ]

    const Item = ({title}) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#184666" barStyle="light-content" />
            <FlatList
                data={data}
                renderItem={({item}) => <Item title={item.title} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
