import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';


export default function NotFoundScreen() {
    return (
        <View>
            <Stack.Screen options={{ title: 'Oops!' }} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
});
