import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { View, Text, StyleSheet, Image } from 'react-native'

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    const [result, setResult] = useState({});

    const getResult = id => {
        axios.get(`https://opentable.herokuapp.com/api/restaurants/${id}`)
            .then(({ data }) => {
                setResult(data)
            })
    }

    useEffect(() => {
        getResult(id)
    }, [])

    if (!result) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: result.image_url }} style={styles.image} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.phone}</Text>
            <Text>{result.price ? `${result.price}` : ''}</Text>
            <Text>{result.address}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginLeft: 15
    },
    image: {
        width: 380,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold'
    }
})

export default ResultsShowScreen