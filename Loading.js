import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Button, Modal, ActivityIndicator } from 'react-native'

export default function Loading() {
    const [modalVisible, setModalVisible] = useState(false);
    if (!modalVisible) {
      return null;
    }
  
    return (
      <>
        <Modal>
          <View style={{ flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
            <View style={{ backgroundColor: "white", padding: 10, borderRadius: 5, width: "80%", alignItems: "center" }}>
              <Text style={styles.progressHeader}>Loading...</Text>
              <ActivityIndicator size="large" color="#f35588" />
            </View>
          </View>
        </Modal>
      </>
    );
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