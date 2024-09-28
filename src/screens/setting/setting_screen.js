import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.profileContainer}>
          <Image
            style={[styles.image, styles.profileImage]}
            source={require('../../../assets/user_icon.png')}
            resizeMode="contain"
          />
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>Profile</Text>
          </View>
        </View>
        <View style={styles.space} />
        <Image
          style={styles.image}
          source={require('../../../assets/user_icon.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.horizontalLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10, 
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  profileImage: {
    marginTop: 5, 
  },
  textContainer: {
    marginLeft: 10,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#CCCCCC',
    marginVertical: 10,
  },
  nameText: {
    fontSize: 16,
  },
  space: {
    width: '69%', 
  },
});

export default SettingsScreen;
