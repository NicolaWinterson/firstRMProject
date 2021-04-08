import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function SearchBar(props){
  return (
    <>
    <TextInput
        style={styles.searchBar}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        defaultValue={props.defaultValue}
        onSubmitEditing={props.onSubmitEditing}
      /> 
    </>
      
  );
}

const styles = StyleSheet.create({
  searchBar: {
    height: 80,
  }
})