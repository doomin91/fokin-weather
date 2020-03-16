import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { fonts } from "./fonts";


export default function Loading() {
    return (<View style={styles.container}>
        <Text style={styles.text}>날씨 정보를 받아오고 있습니다...</Text>
    </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA"
    },
    text: {
        color: "#2c2c2c",
        fontSize: 17,
        fontFamily: fonts.BMHANNAPro

    }
});