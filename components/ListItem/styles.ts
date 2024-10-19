import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

const componentHeight = 75;

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    innerContainer: {
        flexGrow: 1,
        flexDirection: "row",
        alignItems: "center",
        height: componentHeight,
    },
    thumbnail: {
        width: 70,
        height: "100%",
        borderRadius: 10,
        marginRight: 14,
    },
    title: {
        fontSize: 15,
        color: Colors.dark.background,
        fontWeight: "bold",
    },
    editProduct: {
        width: 30,
        height: componentHeight,
        flexGrow: 0,
        justifyContent: 'center',
        alignItems: "center",
    }
});