import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Orders() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
            headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Explore</ThemedText>
            </ThemedView>
            <ThemedText>This app includes example code to help you get started.</ThemedText>
            <Collapsible title="File-based routing">
                <ThemedText>
                    This app has two screens:{' '}
                    <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
                    <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
                </ThemedText>
                <ThemedText>
                    The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
                    sets up the tab navigator.
                </ThemedText>

            </Collapsible>
            <Collapsible title="Android, iOS, and web support">
                <ThemedText>
                    You can open this project on Android, iOS, and the web. To open the web version, press{' '}
                    <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
                </ThemedText>
            </Collapsible>
            <Collapsible title="Images">
                <ThemedText>
                    For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
                    <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
                    different screen densities
                </ThemedText>
                <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />

            </Collapsible>

        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});
