/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Text, Pressable, Touchable, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { hideNavigationBar } from 'react-native-navigation-bar-color';
import { Dimensions } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import LocationScreen from './src/screens/LocationScreen';
import TabBarMap from './src/assets/images/Icons/TabBarMap.svg'
import TapBarMenu from './src/assets/images/Icons/TabBarMenu.svg'
import { Screen } from 'react-native-screens';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

const Tab = createBottomTabNavigator();
hideNavigationBar()

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          tabBarStyle: {
            backgroundColor: '#232A33',
            borderColor: '#5B606C',
          },
          tabBarShowLabel: false,
        }}>
          <Tab.Screen
            name='Home'
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused, size }) => {
                return (
                  <TabBarMap />
                );
              },
            }} />
          <Tab.Screen
            name='Settings'
            component={LocationScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused, size }) => {
                return (
                  <TapBarMenu />
                );
              },
            }} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}



export default App;
