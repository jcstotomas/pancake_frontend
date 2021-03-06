import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>News Feed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: "black",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 23,
  },
});
export default Header;
