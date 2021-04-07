import React, { useState, useEffect } from 'react'
import SearchBar from "./SearchBar"
import PlantCard from "./PlantCard"
import Loading from "./Loading"
import { API_KEY } from '@env'
import axios from 'axios';
import { StyleSheet, View, Text, TextInput, Button, Modal, ActivityIndicator, FlatList, Image } from 'react-native'


export default function App() {

  const [plants, setPlants] = useState({});
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("coconut");

  useEffect(() => {

    const getPlants = async () => {
      try {
        const URL = `https://trefle.io/api/v1/plants/search?token=${API_KEY}&q=${query}`;
        const response = await fetch(URL, {
          mode: "cors"
        });
        console.log("response is:" + response);
        const data = await response.json();
        var stringifiedData = JSON.stringify(data);
        console.log("response done, let's read the json" + data)
        //console.log("that data stringified" + stringifiedData);
        setPlants(data.data);
        console.log(data.data[0].id + data.data[0].common_name)
      } catch (error) {
        setError(error);
        console.log("it is broken");
        console.error(error.message);
      }
    };

    getPlants();
    console.log("effect has been run");
  }, [query]);

  const updateSearch = event => {
    setSearch(event.target.value);
    console.log(search);
  };

  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  if (error) {
    return <View style={{ color: "red" }}>{error.message}</View>;
  }

  return (
    <View style={styles.container}>
      <Loading />

      <View>
        <Text style={styles.dummyText}>Plant Search</Text>
      </View>

      <TextInput
        style={{ height: 80 }}
        placeholder="Search plants..."
        onChangeText={search => setSearch(search)}
        defaultValue={search}
      />
      <Button
        onPress={getSearch}
        title="Search"
      />

      <FlatList
        data={plants}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item: plant }) => (
          <View style={styles.card}>
            <Text style={styles.plantCard_heading}>{plant.common_name}</Text>
            <Text style={styles.plantCard_subheading}>{plant.scientific_name}</Text>
            <Image style={styles.plantIMG}
              source={{ uri: plant.image_url }} />
          </View>
        )}
      >
      </FlatList>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#F5FCFF",
  },
  dummyText: {
    top: '5%',
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  textInput: {
    borderColor: 'gray',
    height: 40,
    borderWidth: 1
  },
  card: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    margin: 15,
    padding: 5,
    backgroundColor: "#ecf0f1",
    height: 200,
    shadowOpacity: 1,

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