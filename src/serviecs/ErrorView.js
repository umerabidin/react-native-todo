// ErrorView.js

import React from 'react';
import { View, Text } from 'react-native';

const ErrorView = ({ error }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Error: {error.message}</Text>
  </View>
);

export default ErrorView;
