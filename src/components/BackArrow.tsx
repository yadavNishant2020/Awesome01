import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/FontAwesome';

const BackArrow = () => {
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <TouchableOpacity onPress={handleBack} style={tw`ml-4`}>
            <View style={tw`w-10 h-10 rounded-full  flex items-center justify-center border border-black`}>
                <Icon name='arrow-left' color={"black"} />
            </View>

        </TouchableOpacity>
    );
};

export default BackArrow;
