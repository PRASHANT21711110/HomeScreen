import { StyleSheet, Text, View, Button,AntDesgin,Colors } from 'react-native'
// import React from 'react'
import { RadioButton } from 'react-native-paper';
import React, { useState } from 'react';
import { color } from 'react-native-elements/dist/helpers';

const Ingradients = () => {
  const [selectedValue, setSelectedValue] = useState('option1');
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text style={{ marginTop: 20, fontSize: 20, marginLeft: 20 }}>Choice Of Top Burger</Text>
      <View style={{ marginTop: 15, marginLeft: 60 }}>
        <Button
          title="Required"
          color="blue"

          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <View style={styles.container}>
        <View style={styles.radioGroup}>
          <View style={styles.radioButton}>
            <View>
              <RadioButton.Android
                value="option1"
                status={selectedValue === 'option1' ?
                  'checked' : 'unchecked'}
                onPress={() => setSelectedValue('option1')}
                color="#007BFF"
              />
              <Text style={styles.radioLabel}>
                Extra Savory Sauce
              </Text>
            </View>
            <View>
              <RadioButton.Android
                value="option2"
                status={selectedValue === 'option2' ?
                  'checked' : 'unchecked'}
                onPress={() => setSelectedValue('option2')}
                color="#007BFF"
              />
              <Text style={styles.radioLabel}>
                Extra Cheese
              </Text>
            </View>
            <View>
              <RadioButton.Android
                value="option3"
                status={selectedValue === 'option3' ?
                  'checked' : 'unchecked'}
                onPress={() => setSelectedValue('option3')}
                color="#007BFF"
              />
              <Text style={styles.radioLabel}>
                Extra Tomatos
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Ingradients

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    marginTop: 70,
    marginLeft: -350,
  },
  marginLeft: 20,
  radioGroup: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
    marginRight: -20,
    shadowOffset: {
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  radioLabel: {
    marginLeft: 50,
    marginTop: -35,
    fontSize: 20,
    color: '#333',
    marginRight: 250,
  },
});