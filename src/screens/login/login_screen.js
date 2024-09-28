import React, { useState } from 'react';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { handleLogin } from '../login/login_screen_logic';
import IconTextInput from '../../components/IconTextInput';
import CustomButton from '../../components/custom_button'; 
const logo = require("../../../assets/app_logo.png");
const emailIcon = require("../../../assets/email_icon.png");
const passwordIcon = require("../../../assets/password_icon.png");

const LoginScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSignupPress = () => {
    navigation.navigate('SignupScreen');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <SafeAreaView>
          <Image source={logo} style={styles.image} resizeMode='contain' />
          <Text style={styles.title}>
            <Text style={styles.firstLine}>Welcome Back to DO IT</Text>{'\n'}
            <Text style={styles.secondLine}>Have another productive day!</Text>
          </Text>

          <View style={styles.inputView}>
            <IconTextInput
              iconSource={emailIcon}
              placeholder='Email'
              value={username}
              onChangeText={(text) => {
                setUsername(text);
                setUsernameError("");
              }}
              secureTextEntry={false}
              error={usernameError}
            />
            {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}
            
            <IconTextInput
              iconSource={passwordIcon}
              placeholder='Password'
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setPasswordError("");
              }}
              secureTextEntry={true}
              error={passwordError}
            />
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
          </View>

          <CustomButton
            title="LOGIN"
            onPress={() => handleLogin(username, password, navigation, setUsernameError, setPasswordError)}
            buttonStyle={{ marginBottom: 20 }} 
          />

          {/* <Text style={styles.optionsText}>OR LOGIN WITH</Text> */}

          <Pressable onPress={handleSignupPress}>
            <Text style={styles.signup}>Don't Have Account? Sign Up</Text>
          </Pressable>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05243E',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  image: {
    height: 100,
    width: 100,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 40,
    color: "white",
    marginBottom: 10,
    
  },
  inputView: {
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 30,
  },
  errorText: {
    fontSize: 12,
    color: "white",

    marginLeft: 10,

  },
  optionsText: {
    textAlign: "center",
    paddingVertical: 10,
    color: "white",
    fontSize: 14,
    marginBottom: 6,

  },
  signup: {
    color: "white",
    fontSize: 13,
    textAlign: "center",
    marginTop: 10,

  },
  firstLine:{
    marginBottom:10,
    marginEnd:10,
  }
});

export default LoginScreen;
