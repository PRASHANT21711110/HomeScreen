import React from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  FlatList,
  ImageBackground,
} from "react-native";
import Nasted22 from "./Nasted22";
import Nasteds from "./Nasteds";
import OrderAgain from "./OrderAgain";
import { useNavigation } from "@react-navigation/native";
const Nasted = () => {
  const navigation = useNavigation()
  const renderItem = ({ item }) => {
   
    return (
      < TouchableOpacity onPress={()=>{navigation.navigate("Nasted22")}}>
      <View 
       style={styles.flatlist}>
        <View style={{flexDirection:"row"}}>
         
        <Image source={item.Image} style={styles.flatlistimage} />
          <View style={{flexDirection:"row"}}>
          <Text style={styles.text1}>{item.name}</Text>
          <Image source={item.save}  className = "h-7 w-7 rounded-t-3xl ml-20 mt-5"
        resizeMode="cover"  />
        </View>
        <View>
          <Text style={styles.text02}>{item.datetime}</Text>
          </View>
          <View style={{flexDirection:"row"}}>
          <Image  style={styles.star} source={item.Image1}  className = "h-4 w-4 rounded-t-3xl"
        resizeMode="cover"  />
        <View>


          
        <Text style={styles.rating} className='text-black-900 '>{item.text1}</Text>
        <Image style={styles.clocks} source={item.clock}  className = "h-3 w-3 rounded-t-3xl"
        resizeMode="cover"  />
        <Text style={styles.time}className='text-black-900 '>{item.time}</Text>
        <Text style={styles.text22} className='font-bold ml-20'>{item.text2}</Text>
        </View>
        </View>
        <View>
        </View>
        </View> 
      </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList data={Nasteds}  renderItem={renderItem} />
    </View>
  );
};
export default Nasted;

const styles = StyleSheet.create({
  flatlist: {
    flexDirection: "row",
  },
  flatlistimage: {
    padding: 3,
    marginHorizontal: 5,
    margin: 4,
    height: 80,
    width: 80,
    borderRadius: 10,
    marginLeft: 10,
    marginBottom: 30,
    marginTop:18,
  },
  flatlistimage1: {
    padding: 3,
    marginHorizontal: 5,
    margin: 4,
    height: 50,
    width: 50,
    borderRadius: 25,
    marginLeft: 220,
    marginTop: -35,
    borderWidth: 10,
    borderColor: "white",
  },
  text1: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    flexDirection: "row",
    marginLeft: 15,
    marginTop: 18,
  },
  text02: {
    fontSize: 15,
    color: "black",
   marginLeft: -230,
   marginTop:50,

  },
  star:{

marginLeft:-230,
marginTop:77,
  },
  rating:{
    flexDirection:"row",
    marginLeft:10,
    marginRight:-30,
    marginTop:10, 
    marginTop:77,
  },
  clocks:{
   marginLeft:45,
   marginTop:-15,
  },
  time:{
    marginLeft:63,
    marginRight:-200,
    marginTop:-15,
  },
  text22:{
   marginLeft:180,
   marginRight:-220,
  },
});
