import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useSelect } from '@/hooks/useSelect';
import { useEffect } from 'react';

export default function HomeScreen() {
    // const { selectResponse, selectData, selectResponseError } = useSelect({
    //     tableName: "products",
    // selectColumns: ['title', 'bucket_name', 'bucket_folder', 'id'],
    //     limit: 10,
    // })

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#2eabd1' }}
            headerImage={
                <View style={{ justifyContent: "center", alignItems: "center", height: "100%" }}>
                    <Text>Adicionar Produto</Text>
                </View>
            }>



        </ParallaxScrollView>
    );
}
