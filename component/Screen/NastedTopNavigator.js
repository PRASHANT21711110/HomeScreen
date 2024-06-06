import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Details from './Details';
import Ingradients from './Ingradients';
import Review from './Review';



const Tab = createMaterialTopTabNavigator();

function NastedTopNavigator() {
  return (
   
    <Tab.Navigator>
      <Tab.Screen name="Details" component={Details} />
      <Tab.Screen name="Ingradints" component={Ingradients} />
      <Tab.Screen name="Review" component={Review} />
      
    </Tab.Navigator>
   
  );
}
export default NastedTopNavigator;