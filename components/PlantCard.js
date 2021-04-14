import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, Pressable  } from 'react-native'

const PlantCard = (props) => {
    return (
        <Pressable  style={styles.card}
        onPress={props.onPress}
        >
            <Text style={styles.plantCard_heading}>{props.heading}</Text>
            <Text style={styles.plantCard_subheading}>{props.subheading}</Text>
            <Image style={styles.plantIMG}
                source={props.source} />
        </Pressable >
    );
};

const styles = StyleSheet.create({
    card: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        margin: 15,
        padding: 5,
        backgroundColor: "#ecf0f1",
        height: 200,
    },
    plantCard_heading: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 30,
    },
    plantCard_subheading: {
        color: 'black',
        fontStyle: 'italic',
        fontSize: 24,
    },
    plantIMG: {
        top: 10,
        alignSelf: 'center',
        borderRadius: 50,
        width: 100,
        height: 100,
    },
});

export default PlantCard;