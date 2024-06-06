import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import NastedTopNavigator from "./NastedTopNavigator";
import { NavigationContainer } from "@react-navigation/native";

const Nasted22 = () => {
  return (
    <>
      <View style={{ marginLeft: 5 }}>
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=2048x2048&w=is&k=20&c=nKbaKhC7zMeFFODZQHmMUlinK-npJ9exg8yRE9xgQ5w=",
          }}
          style={{ width: 350, height: 300 }}
        />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 20 }}>Chiken Burger</Text>
          <Text style={{ marginTop: 5, marginRight: 6, marginLeft: 140 }}>
            $15.00
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{
              uri: "https://cdn.iconscout.com/icon/premium/png-512-thumb/rating-28-520164.png?f=webp&w=256",
            }}
            style={{ width: 25, height: 25 }}
          />
          <Text style={{ marginTop: 4, marginLeft: 5 }}>4.9 (150)</Text>
          <Image
            source={{
              uri: "https://toppng.com/uploads/preview/clock-free-to-use-high-resolution-simple-clock-icon-transparent-background-11562962323kg7cjgfeeo.png",
            }}
            style={{ marginTop: 7, marginLeft: 30, width: 15, height: 15 }}
          />
          <Text style={{ marginTop: 5, marginRight: 6 }}> 30 min</Text>
          <Image
            source={{
              uri: "https://images.freeimages.com/fic/images/icons/1681/siena/256/currency_dollar_green.png",
            }}
            style={{ width: 25, height: 25, marginLeft: 30 }}
          />
          <Text style={{ marginTop: 3, marginLeft: 2 }}>Free Delivery</Text>
        </View>
      </View>
      <NastedTopNavigator />
    </>
  );
};
export default Nasted22;

const styles = StyleSheet.create({});
