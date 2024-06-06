import { StatusBar, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";
import * as Icon from "react-native-feather";
import TopTab_02 from "./Navigaor/TopTab_02";
import { NavigationContainer } from "@react-navigation/native";
import Nasted from "./Nasted";
import OrderAgain from "./OrderAgain";
const ListItem = ({ item , navigation}) => {
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate("Nasted")}}> 
    <View className="mr-6 bg-white rounded-3xl shadow-lg">
      <Image 
        source={{
          uri: item.uri,
        }}
       className = "h-20 w-30 rounded-t-3xl"
        resizeMode="cover"
      />
      <View className="px-0 pb-1 space-y-0">
      <Text className="text-lg font-bold pt-2">{item.text}</Text> 
      
      <View className ="flex-row item-center space-x-1">
      <Image 
        source={{
          uri: item.Image,
        }}
       className = "h-4 w-4 rounded-t-3xl"
        resizeMode="cover"
      />
      <Text className='text-green-700'>{item.star}</Text>
      <Text className="text-gray-700">
        ({item.reviewa}review). <Text className="font-semibold">{item.category}</Text>
      </Text>
      </View>
      <View className="flex-row item-center space-x-1">
          <Icon.MapPin color="gray" width="15" height="15"/>
          <Text className="text-gray-700 text-xs">Nearby.{item.address}</Text>
      </View>
      </View>
    </View>
    
    </TouchableOpacity>
  );
};

const HomeScreen = (props) => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#00BCD4"
        translucent={true}
      /> */}

      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
          
              <Text style={styles.sectionHeader}>{section.title}</Text>
              <Text style={{marginLeft:290,marginTop:-20, color:"orange"}}className="font-semibold">See All</Text>
             
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} navigation={navigation}/>}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} navigation={navigation} />;
          }}
        />
      </SafeAreaView>
     <TopTab_02/>
     <OrderAgain navigation={navigation}/>
    </SafeAreaView>
  );
};

const SECTIONS = [
  {
    title: "Favourite", 
    horizontal: true,
    data: [
      {
        key: "1",
        text: "Item text 1",
        star:"4",
        reviewa:"4.5k reviewa",
        category:"Fast Food",
        address:" 434 second street",
        uri: "https://www.bristolairport.co.uk/media/igcjyj0i/burger-king-slider-904-x-509-copy.jpg?width=904&height=509&rnd=133075447385870000",
        Image: "https://thumbs.dreamstime.com/z/golden-star-reward-cocept-26458939.jpg?w=768",
      },
      {
        key: "2",
        text: "Item text 2",
        star:"4",
        reviewa:"4.5k reviewa",
        category:"Fast Food",
        address:" 434 second street",
        uri: "https://d4t7t8y8xqo0t.cloudfront.net/resized/720X480/restaurant%2F652773%2Frestaurant120180122083155.png",
        Image: "https://thumbs.dreamstime.com/z/golden-star-reward-cocept-26458939.jpg?w=768",
      },

      {
        key: "3",
        text: "Item text 3",
        star:"4",
        reviewa:"4.5k reviewa",
        category:"Fast Food",
        address:" 434 second street",
        uri: "https://i.insider.com/5bbd187101145529745a9895?width=1000&format=jpeg&auto=webp",
        Image:  "https://thumbs.dreamstime.com/z/golden-star-reward-cocept-26458939.jpg?w=768",
      },
      {
        key: "4",
        text: "Item text 4",
        star:"4",
        reviewa:"4.5k reviewa",
        category:"Fast Food",
        address:" 434 second street",
        uri: "https://image.cnbcfm.com/api/v1/image/107271392-1689277783823-Barbie_Burger.jpg?v=1689279528&w=740&h=416&ffmt=webp&vtcrop=y",
        Image: "https://thumbs.dreamstime.com/z/golden-star-reward-cocept-26458939.jpg?w=768",
      },
      {
        key: "5",
        text: "Item text 5",
        star:"4",
        reviewa:"4.5k reviewa",
        category:"Fast Food",
        address:" 434 second street",
        uri: "https://www.livemint.com/lm-img/img/2023/07/12/600x338/F0mVRPPacAICJm0_1689138352454_1689138366910.jpg",
        Image:  "https://thumbs.dreamstime.com/z/golden-star-reward-cocept-26458939.jpg?w=768",
      },
    ],
  },
];
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -40,
  },
  sectionHeader: {
    fontWeight: "800",
    fontSize: 18,
    color: "black",
    marginTop: 60,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
 
 
});
