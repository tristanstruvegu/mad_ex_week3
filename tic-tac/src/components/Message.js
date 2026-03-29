import { View, StyleSheet, Text, ScrollView } from "react-native";
import colors from "../constants/colors"
export default function Message({ message }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.text}>{message}</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: "70%",
        backgroundColor: colors.message,
        borderWidth: 1,
        borderColor: "black",
        padding: 10,
        borderRadius: 5,
    },
    text: {
        color: "black",
    },
});
