import React, { useState } from 'react'
import SearchBar from "./SearchBar"
import Loading from "./Loading"
import { StyleSheet, View, Text, TextInput, Button, Modal, ActivityIndicator } from 'react-native'


export default function App() {

  const onPressButton = () => {
    alert('You pressed the button!')
  }
  
  return (
    <View style={styles.container}>
      <Loading />

      <View>
        <Text style={styles.dummyText}>Pizza Search</Text>
      </View>
      <SearchBar />
      <Button
        onPress={onPressButton}
        title="Press Me"
        color="#841584"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "pink",
  },
  dummyText: {
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