import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const id = navigation.getParam("id"); // get the business id from the ResultsListScreen. Props are passed from parent to child. The id is passed through react navigation functionality

    const getResult = async (id) => {
        // make a request to the yelp api to get the business details

        try {
            const response = await yelp.get(`/${id}`);

            setResult(response.data);
            setErrorMessage("");
        } catch (err) {
            setErrorMessage("Something went wrong");
        }
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <>
            <Text>Results Show</Text>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <Image
                            source={{ uri: item }}
                            style={styles.imageStyle}
                        />
                    );
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: 300,
        marginVertical: 10,
    },
});

export default ResultsShowScreen;
