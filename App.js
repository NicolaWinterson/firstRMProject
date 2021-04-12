import React, { useState, useEffect } from 'react'
import SearchBar from "./components/SearchBar"
import PlantCard from "./components/PlantCard"
import ErrorCard from "./components/ErrorCard"
import Loading from "./components/Loading"
import { API_KEY } from '@env'
import axios from 'axios';
import { StyleSheet, View, Text, TextInput, Button, Modal, ActivityIndicator, FlatList, Image } from 'react-native'


export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [plants, setPlants] = useState({});
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("coconut");

  useEffect(() => {

    const getPlants = async () => {
      try {
        setLoading(true)
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
        //console.log(data.data[0].id + data.data[0].common_name)
      } catch (error) {
        setError(error);
        console.log("it is broken");
        console.error(error.message);
      } finally {
        console.log("reached finally")
        setLoading(false)
      }
    };

    getPlants();
    console.log("effect has been run");
  }, [query]);

  /* const updateSearch = event => {
    setSearch(event.target.value);
    console.log(search);
  }; */

  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  if (error) {
    return <Text style={{ color: "red" }}>{error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search plants..."
        onChangeText={search => setSearch(search)}
        defaultValue={search}
        onSubmitEditing={getSearch}
      />
      <Button
        color="green"
        onPress={getSearch}
        title="Search"
      />
      {isLoading ? <Loading /> : (
        <FlatList
          ListEmptyComponent={<ErrorCard />}
          data={plants}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item: plant }) => (

            <PlantCard
              heading={plant.common_name}
              subheading={plant.scientific_name}
              source={{ uri: plant.image_url }}
            />



          )}>
        </FlatList>
      )
      }


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

});