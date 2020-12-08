import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text, View, ScrollView } from "react-native";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    stifyContent: "center",
    backgroundColor: "#24292e",
    padding: 80
  },
  text: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: '700',
    padding: 30
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal><TouchableWithoutFeedback>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
      <Link to="/"><Text style={styles.text}>Repositories</Text></Link>
      <Link to="/login"><Text style={styles.text}>SignIn</Text></Link>
      </View>
      </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
};

export default AppBar;
