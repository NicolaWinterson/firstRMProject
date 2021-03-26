import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Button, Modal, ActivityIndicator } from 'react-native'

const Loading = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    if (!modalVisible) {
        return null;
      }

    return (
        <>
            <Modal>
                <View style={{ flex:1,backgroundColor:"#00000020", justifyContent:"center",alignItems:"center"}}>
                        <View style={{backgroundColor:"white",padding:10,borderRadius:5, width:"80%", alignItems:"center"}}>
                            <Text style={styles.progressHeader}>Loading...</Text>
                            <ActivityIndicator size="large" color="#f35588"/>
                         </View>
                     </View>
            </Modal>
        </>
    );

}

export default function App() {


  return (
  <>
   <Loading />

    <View style={styles.container}>
      <Text style={styles.dummyText}>My first React Native App</Text>
    </View>
    <TextInput style={styles.textInput} defaultValue="You can type in me"></TextInput>
     <Button
        title='Click here!'
        color="#841584"
        accessibilityLabel="purple button"
      />
  </>
  )
}

const styles = StyleSheet.create({
  container: {
    top: '40%',
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