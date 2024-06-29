import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import tw from 'twrnc';
import CustomButton from '../components/Button'; 

interface HomeProps {
  navigation: any; 
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  
  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const navigateToMain = () => {
    navigation.navigate('Main');
  };

  return (
    <ImageBackground
      source={require('../public/main_background.png')}
      style={tw`flex-1`}
    >
      <View style={tw`flex-1 justify-between p-6`}>
        {/* Header */}
        <View style={tw`mt-10`}>
          <Text style={tw`text-white text-4xl text-left font-bold`}>Soo{"\n"}and Carrots</Text>
        </View>

        <View style={tw`mb-10`}>
          <CustomButton
            onPress={navigateToSignUp} // Use function to navigate
            text="Sign Up"
            iconName="sign-in"
            hideIcons={false}
            className='bg-[#253BFF]'
          />
          <CustomButton
            onPress={navigateToMain} // Use function to navigate
            text="Continue with Email"
            iconName="envelope"
            className='bg-[#1D2939]'

          />
        </View>
      </View>
    </ImageBackground>
  );
}

export default Home;
