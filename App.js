import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreenComponent from './src/screens/splash/splash_screen';
import LoginScreen from './src/screens/login/login_screen';
import SignupScreen from './src/screens/signup/signup_screen';
import OnboardingScreen from './src/screens/onboarding/onboarding_screen';
import BottomNavigationScreen from './src/bottom_navigation';
import CustomHeader from './src/components/CustomHeader'; // Import custom header component
import { View, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={SplashScreenComponent}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignupScreen"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Bottom" component={BottomNavigationScreen} options={{ headerShown: false ,    tabBarHideOnKeyboard: true}} />
          <Stack.Screen
            name="OnboardingScreen"
            component={OnboardingScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
