import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from 'react-native';

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#fff",
                headerShown: false,
            }}>
            <Tabs.Screen
                name="addProduct"
                options={{
                    title: 'Adicionar Produto',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'add-circle' : 'add-circle-outline'} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Início Wesley',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="orders"
                options={{
                    title: 'Pedidos',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'cart-sharp' : 'cart-outline'} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
