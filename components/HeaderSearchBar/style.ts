import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        backgroundColor: Colors.dark.tint,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
        position: "relative",
        marginBottom: 35,
    },
    headerContent: {
        width: "100%",
    },
    homeTitle: {
        color: Colors.dark.text,
        fontSize: 24,

    },
    homeSubtitle: {
        color: Colors.dark.text,
        fontSize: 18,

    },
    searchBar: {
        flexDirection: "row",
        overflow: "hidden",
        position: "absolute",
        bottom: -20,
        borderRadius: 8,
        backgroundColor: Colors.dark.text,
    }
});
