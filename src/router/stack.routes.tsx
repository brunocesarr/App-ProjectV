import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {LoginScreen, HomeScreen} from '../screens';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const stackRoutes = createStackNavigator();

const AppStackRoutes: React.FC = () => {
  return (
    <stackRoutes.Navigator
      initialRouteName="Login"
      screenOptions={{
        cardStyle: {
          backgroundColor: Colors.lighter,
        },
        headerShown: false,
      }}>
      <stackRoutes.Screen name="Login" component={LoginScreen} />
      <stackRoutes.Screen name="Home" component={HomeScreen} />
    </stackRoutes.Navigator>
  );
};

export default AppStackRoutes;
