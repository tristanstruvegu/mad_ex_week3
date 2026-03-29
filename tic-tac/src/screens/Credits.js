import React from "react";
import { View, StyleSheet } from "react-native";
import Title from "../components/Title";
import TButton from "../components/TButton";
import Message from "../components/Message";

const credits = `Credits go to the tutors and teachers of 3701ICT Mobile Application Development.

Content of Griffith University.
`;

const Credits = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Title title ="Credits" />
            <Message message = {credits} />
            <TButton label="Back" fun={() => navigation.goBack()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});


export default Credits;