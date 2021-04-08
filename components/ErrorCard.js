import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ErrorCard() {
    return (
        <View style={styles.errorCard}>
            <Text style={styles.errorCard_heading}>NO RESULTS :-/</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    errorCard: {
        height: 400,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: "#F5FCFF",
    },
    errorCard_heading: {
        color: 'black',
        fontSize: 50,
        textAlign: 'center'
    },
})