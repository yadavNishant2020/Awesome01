import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { CardData } from '../CardData';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  SignUp: { selectedHeading: string };
};

interface CardProps {
  data: CardData;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const { heading, location } = data;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleCardPress = () => {
    navigation.navigate('SignUp', { selectedHeading: heading });
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={tw`bg-[#253BFF] rounded-lg overflow-hidden mb-4`}>
        <ImageBackground
          source={require('../public/card_background.png')} // Adjust path as per your project structure
          style={tw`flex-1 p-4 px-1`}
        >
          <View style={tw`bg-opacity-75 rounded-lg p-3`}>
            <Text style={tw`text-white text-lg font-bold mb-3`}>{heading}</Text>
            <Text style={tw`text-white mb-2`}>YYYY-MM-DD ~ YYYY-MM-DD</Text>
            <Text style={tw`text-white`}>{location}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
