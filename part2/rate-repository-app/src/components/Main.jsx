import { StatusBar } from 'expo-status-bar';
import  RepositoryList  from './RepositoryList';
import  SignIn  from './SignIn';
import  AppBar  from './AppBar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch } from 'react-router-native';
import theme from "../theme";

export default function Main() {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
      <Route exact path="/" >
        <RepositoryList style={styles.list}/>
      </Route>
        <Route path="/login">
          <SignIn />
        </Route>
      </Switch>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    font: theme.fonts,
  },
  list: {
    height: 100,
    backgroundColor: '#0366d6'
  }
});
