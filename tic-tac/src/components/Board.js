import { StyleSheet, Text, View } from "react-native";

const Cell = ({ play }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{play}</Text>
    </View>
  );
};

const Board = ({ steps }) => {
    return (
        <View style={styles.board}>
            {steps.map((p, i) => (
                <Cell key={i} play={p} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    board: {
        width: 300,
        height: 300,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 10,
        backgroundColor: "orange",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        paddingTop: 30,
        // alignItems: "center",
    },
    box: {
        width: 80,
        height: 80,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#090",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
    },
});

export default Board;