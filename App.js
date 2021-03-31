import React, { useState, useEffect } from 'react'
import SearchBar from "./SearchBar"
import Loading from "./Loading"
import {API_KEY} from '@env'
import axios from 'axios';
import { StyleSheet, View, Text, TextInput, Button, Modal, ActivityIndicator } from 'react-native'


export default function App() {

  /* const onPressButton = () => {
    alert('You pressed the button!')
  } */

  const [plant, setPlant] = useState({});
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("coconut");

  useEffect(() => {
    
    const getPlant = async () => {
      try {
        const URL = `https://trefle.io/api/v1/plants/search?token=${API_KEY}&q=${query}`;
        const response = await fetch(URL, {
          mode: "cors"
        });
        console.log("response is:" + response);
        const data = await response.json();
        var stringifiedData = JSON.stringify(data);
        console.log("response done, let's read the json" + data)
        console.log("that data stringified" + stringifiedData);
        setPlant(data);
      } catch (error) {
        setError(error);
        console.log("it is broken");
        console.error(error.message);
      }
    };

    getPlant();
    console.log("effect has been run");
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  if (error) {
    return <div style={{ color: "red" }}>{error.message}</div>;
  }


  return (
    <View style={styles.container}>
      <Loading />

      <View>
        <Text style={styles.dummyText}>Plant Search</Text>
      </View>
      <TextInput
        style={{height: 40}}
        placeholder="Search plants..."
        onChangeText={updateSearch}
        defaultValue={search}
      />
      <Button
        onPress={getSearch}
        title="Search"
      />

      {/* <SearchBar /> */}
{/*       <Button
        onPress={onPressButton}
        title="Press Me"
        color="#841584"
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "pink",
  },
  dummyText: {
    top:'5%',
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  textInput: {
    borderColor: 'gray',
    height: 40,
    borderWidth: 1
  }
});