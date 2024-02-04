import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const Home = () => {
  const navigation = useNavigation();

  const handleRedirect = () => {
    navigation.navigate("Scan");
  };
  const screenWidth = Dimensions.get("window").width;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.btn} onPress={handleRedirect}>
          <Text style={styles.text}>Button one</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Button two</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Button three</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>Button four</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: "100%",
    padding: 10,
  },

  header: {
    marginBottom: 20,
  },

  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#325ca8",
  },

  btn: {
    backgroundColor: "#325ca8",
    borderRadius: 5,
    padding: 20,
    width: 200,
    alignItems: "center",
    margin: 20,
  },

  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
