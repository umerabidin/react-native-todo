import React from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, CommonActions } from "@react-navigation/native";

const LogoutScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            handleLogoutRoute();
            console.log('User logged out');
          },
        },
      ],
      { cancelable: false },
    );
  };

  const handleLogoutRoute = async () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'LoginScreen' }],
      })
    );
  };

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <MaterialCommunityIcons name="account-circle" size={50} color="black" />
        <Text style={styles.profileText}>User Profile</Text>
        <MaterialCommunityIcons name="chevron-right" size={30} color="black" style={styles.arrowIcon} />
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Logout Button */}
      <Pressable onPress={() => handleLogout()} style={styles.logoutButton}>
        <MaterialCommunityIcons name="logout" size={20} color="white" />
        <Text style={styles.logoutText}>Log Out</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  arrowIcon: {
    marginLeft: 10,
  },
  divider: {
    width: '80%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  logoutButton: {
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  logoutText: {
    marginLeft: 10,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LogoutScreen;
