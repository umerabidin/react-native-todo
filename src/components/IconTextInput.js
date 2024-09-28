import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

const IconTextInput = ({ iconSource, placeholder, value, onChangeText, secureTextEntry, error }) => {
  return (
    <View style={styles.inputContainer}>
      <Image source={iconSource} style={styles.icon} />
      <TextInput
        style={[styles.input, error ? styles.inputError : null]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        autoCapitalize='none'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor:'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingBottom: 5,
    borderRadius:10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginLeft:10
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    color: 'black',
  },
  inputError: {
    borderColor: "red",
  },
});

export default IconTextInput;
