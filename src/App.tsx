import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './views/Home';
import SignUp from './views/SignUp';
import Competition from './views/Competition';
import Main from './views/Main';
import { SearchProvider } from './SearchContext'; // Import the SearchProvider
import SearchBar from './components/SearchBar';
import BackArrow from './components/BackArrow'; // Import the BackArrow component
import tw from 'twrnc';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <SearchProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{
              headerShown: true, headerTitle: 'Create Account', headerLeft: () => <BackArrow />,
            }} />
            <Stack.Screen
              name="Competition"
              component={Competition}
              options={{
                headerShown: true,
                headerTitle: '',
                headerRight: () => <SearchBar placeholder="Search..." />,
                headerLeft: () => <BackArrow />,
              }}
            />
            <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SearchProvider>
    </SafeAreaView>
  );
};

export default App;
