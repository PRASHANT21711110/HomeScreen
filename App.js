import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ToptabNavigator from './component/Screen/Navigaor/ToptabNavigator';
import HomeScreen from './component/Screen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Nasted from './component/Screen/Nasted';
import Nasted22 from './component/Screen/Nasted22';
import NastedTopNavigator from './component/Screen/NastedTopNavigator';
const Stack = createNativeStackNavigator();
export default function App() {
  return (

      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
          }}
        />
        <Stack.Screen
          name="Nasted"
          component={Nasted}
          options={{}}
        />
        <Stack.Screen
          name="Nasted22"
          component={Nasted22}
          options={{}}
        />
      </Stack.Navigator>

      
      </NavigationContainer>
  );
}
