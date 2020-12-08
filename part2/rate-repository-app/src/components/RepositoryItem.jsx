import React from 'react';
import { Button, StyleSheet, TouchableHighlight, View, Image, Text } from 'react-native';


const renderItem = (item) => {
  let url = item.ownerAvatarUrl;
    return (
       <TouchableHighlight key={item.key} activeOpacity={0.5}>
          <View style={{backgroundColor: 'white', height: 350, display: 'flex', flexDirection: 'column',margin: 10}}>
          <View style={{ display: 'flex', flexDirection: 'row'}}>
          <Image style={styles.logo} source={{
            uri: url
          }} />
          <View style={{ display: 'flex', flexDirection: 'column'}}>
            <Text style={styles.fullName}> {item.fullName}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <View style={{ width: 150, padding: 10, margin: 10, fontSize: 40, borderRadius:30}}>
            <Button title={item.language} />
            </View>
          </View>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ width: 150 }}>
            <Text style={styles.fullName}> {item.stargazersCount}</Text>
            <Text style={styles.description}>Stars</Text>
            </View>
            <View style={{ width: 150 }}>
            <Text style={styles.fullName}> {item.forksCount}</Text>
            <Text style={styles.description}>Forks</Text>
            </View>
            <View style={{ width: 160 }}>
            <Text style={styles.fullName}> {item.reviewCount}</Text>
            <Text style={styles.description}>Reviews</Text>
            </View>
            <View style={{ width: 150 }}>
            <Text style={styles.fullName}> {item.ratingAverage}</Text>
            <Text style={styles.description}>Rating</Text>
            </View>
          </View>
          </View>
        </TouchableHighlight>
    );
  };

  const styles = StyleSheet.create({
   fullName: {
     fontSize: 40,
     fontWeight: "bold",
     margin: 10,
   },
   description: {
     fontFamily: "Cochin",
     fontSize: 40,
     margin: 10,
   },
   logo: {
     width: 100,
     height: 100,
     margin: 40
   }
 });



export default renderItem;
