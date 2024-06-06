import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Breekfast from '../Breekfast';
import Burger from '../../Burger';
import { Coffee } from 'react-native-feather';
import Drink from '../../Drink';
import Pizza from '../../Pizza';
import SerachScreen from '../SearchScreen';


const Tab = createMaterialTopTabNavigator();

const ToptabNavigator = () => {
  return (
    
      <NavigationContainer >
       <SerachScreen/>
        <Tab.Navigator>
           <Tab.Screen name="Breakfast" component={Breekfast} />
           <Tab.Screen name="Burger" component={Burger} />
           <Tab.Screen name="Pizza" component={Pizza} />
           <Tab.Screen name="Coffee" component={Coffee} />
           <Tab.Screen name="Drink" component={Drink}/>
           </Tab.Navigator>
           </NavigationContainer>
  )
}

export default ToptabNavigator

const styles = StyleSheet.create({})

