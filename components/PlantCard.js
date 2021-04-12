import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

const PlantCard = (props) => {
    return (
        <View style={styles.card}>
            <Text style={styles.plantCard_heading}>{props.heading}</Text>
            <Text style={styles.plantCard_subheading}>{props.scientific_name}</Text>
            <Image style={styles.plantIMG}
                source={props.source} />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        backgroundColor: "white",
        alignItems: "center",
        minWidth: "40%",
    },
    image: {
        borderRadius: 50,
        width: "auto",
        height: "auto",
        padding: "5px",
    },
    text: {
        paddingLeft: "2vw",
        marginBottom: 0,
        alignSelf: "flex-start",
    },
});

export default PlantCard;