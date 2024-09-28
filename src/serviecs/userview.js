// UserView.js

import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const UserView = ({ viewer }) => {
  if (!viewer) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const { User } = viewer;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Name: {User.name}</Text>
      <Text>Email: {User.email}</Text>
    </View>
  );
};

export default UserView;
