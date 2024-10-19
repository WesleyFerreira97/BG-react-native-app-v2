import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import FallbackImage from "@/assets/images/fallback.jpg";
import { TabBarIcon } from '../navigation/TabBarIcon';
import { NotePencil } from 'phosphor-react-native';
import { Colors } from '@/constants/Colors';

type ListItemProps = {
    title: string;
    thumb: string;
    itemId?: string;
}

export function ListItem({ title, ...props }: ListItemProps) {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image
                    src={props.thumb || FallbackImage.uri}
                    style={styles.thumbnail}
                />
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
            <View style={styles.editProduct}>
                <NotePencil size={28} color={Colors.dark.background} />
            </View>
        </View>
    );
}