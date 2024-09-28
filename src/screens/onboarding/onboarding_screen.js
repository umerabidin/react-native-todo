import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Colors from '../../utils/colors';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation, CommonActions } from '@react-navigation/native';
import LoginScreen from '../login/login_screen'

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const DotComponent = ({ selected }) => {
    return (
      <View style={[styles.dotContainer, { borderColor: selected ? 'blue' : 'white' }]}>
        <View style={[styles.dot, { backgroundColor: selected ? 'blue' : 'white' }]} />
      </View>
    );
  };

  return (
    <Onboarding
    
      onSkip={() =>
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'LoginScreen' }],
          })
        )
      }
      onDone={() =>
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'LoginScreen' }],
          })
        )
      }
      pages={[
        {
          backgroundColor: '#05243E',
          image: <Image source={require('../../../assets/notes_img.png')} style={styles.image} />,
          title: 'Onboarding',
          subtitle: 'Plan your tasks to do, that way you’ll stay organized and you won’t skip any',
        },
        {
          backgroundColor: '#05243E', 
          image: <Image source={require('../../../assets/calendar_img.png')} style={styles.image} />,
          title: 'Onboarding',
          subtitle: 'Make a full schedule for the whole week and stay organized and productive all days',
        },
        {
          backgroundColor: '#05243E', 
          image: <Image source={require('../../../assets/team_img.png')} style={styles.image} />,
          title: 'Onboarding',
          subtitle: 'create a team task, invite people and manage your work together',
        },
        {
          backgroundColor: '#05243E',
          image: <Image source={require('../../../assets/security_img.png')} style={styles.image} />,
          title: 'Onboarding',
          subtitle: 'You informations are secure with us',
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
    dotContainer: {
      width: 8,
      height: 8,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
      borderWidth: 1,
      padding: 5,
      margin: 2,
    },
    dot: {
      width: 4,
      height: 4,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '80%', // Adjust width as per your design
      height: 270,  // Adjust height as per your design
      resizeMode: 'contain', // Ensure image maintains aspect ratio
    },
  });
  
  export default OnboardingScreen;
  


