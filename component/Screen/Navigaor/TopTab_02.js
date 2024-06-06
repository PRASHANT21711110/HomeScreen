import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { NavigationContainer } from '@react-navigation/native';
import Recent from '../Recent';
import Favorite from '../Favorite';
import Rating from '../Rating';
import Populer from '../Populer';


const Tab = createMaterialTopTabNavigator();

const TopTab_02 = () => {
  return (
        <Tab.Navigator>
           <Tab.Screen name="Recent" component={Recent} />
           <Tab.Screen name="Favorite" component={Favorite} />
           <Tab.Screen name="Rating" component={Rating} />
           <Tab.Screen name="Populer" component={Populer} />
           </Tab.Navigator>
          
  )
}

export default TopTab_02

const styles = StyleSheet.create({})