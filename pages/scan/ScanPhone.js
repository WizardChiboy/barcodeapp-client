import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions, ScrollView, Text } from "react-native";
import { View, TouchableOpacity } from "react-native";
import QRCode from "react-native-qrcode-svg";
import axios from "../../axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ScanPhone = () => {
  const [id, setId] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const storedData = await AsyncStorage.getItem("user");

      if (storedData !== null) {
        const userData = JSON.parse(storedData);
        setId(userData._id);
        console.log("User ID:", userData._id);
      } else {
        console.log("No data found in AsyncStorage for 'user'");
      }
    } catch (error) {
      console.error("Error retrieving data from AsyncStorage:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUser = async () => {
    try {
      const response = await axios.get(`/auth/account/${id}`);
      console.log(response.data);
      setUserDetails(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      fetchUser();
    }
  }, [isLoading]);

  const generateQRCodeValue = () => JSON.stringify(userDetails?.phone);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}> scan phone</Text>

      <View style={styles.header}>
        <TouchableOpacity>
          <QRCode value={generateQRCodeValue()} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ScanPhone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: "100%",
    padding: 10,
  },
  headerText: {
    marginBottom: 20,
    textTransform: "capitalize",
    fontSize: 18,
    fontWeight: "bold",
  },

  header: {
    marginBottom: 20,
  },
});
