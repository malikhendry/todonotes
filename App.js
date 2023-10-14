import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { Entypo } from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";
import NotesStack from "./screens/NotesStack";
import AddScreen from "./screens/AddScreen";















const Stack = createStackNavigator();

export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator screenOptions={{ presentation: 'modal' }} >

       <Stack.Screen
         name="Notes Stack"
         component={NotesStack}
    options={{ headerShown: false, headerMode:false }}
       />
       <Stack.Screen name="Add Note" component={AddScreen} />
     </Stack.Navigator>
   </NavigationContainer>
 );
}


const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#ffc",
alignItems: "center",
justifyContent: "center"
}
});

