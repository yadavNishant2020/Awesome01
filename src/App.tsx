import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './views/Home';
import SignUp from './views/SignUp';
import Competition from './views/Competition';
import Main from './views/Mail';

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen name="Home" component={Home} options={{
            headerShown: false,

          }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{
            headerShown: true,
            headerTitle: "Create Account",

          }} />
          <Stack.Screen name="Competition" component={Competition} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
