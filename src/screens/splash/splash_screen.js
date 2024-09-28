import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkTokenAndLaunch = async () => {
      try {
        const alreadyLaunched = await SecureStore.getItemAsync('alreadyLaunched');
        const token = await SecureStore.getItemAsync('token');

        if (!alreadyLaunched) {
          await SecureStore.setItemAsync('alreadyLaunched', 'true');
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'OnboardingScreen' }],
            })
          );
        } else if (token) {
          console.warn('Token found:', token);
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'Bottom' }],
            })
          );
        } else {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'LoginScreen' }],
            })
          );
        }
      } catch (error) {
        console.error('Error during SplashScreen:', error);
        // Handle error if necessary
      }
    };

    const timeout = setTimeout(checkTokenAndLaunch, 5000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/app_logo.png')}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#05243E',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '50%',
    height: '50%',
    marginBottom: 20,
  },
});

export default SplashScreen;
