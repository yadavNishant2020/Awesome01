import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ViewStyle } from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/FontAwesome';

interface InputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    secureTextEntry?: boolean;
    error?: string;
    containerStyle?: ViewStyle;
    icon?: string;
    onIconPress?: () => void;
    readOnly?: boolean;

  }

const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,          
  readOnly=false,
  error,
  containerStyle,
  icon,
  onIconPress,
}) => {
  return (
    <View style={[tw`mb-4`, containerStyle]}>
      <View style={tw`flex-row items-center bg-[#F9FAFB] rounded-md border border-gray-100`}>
        <TextInput
          style={tw`flex-1 p-3 text-black`}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          readOnly={readOnly}
        />
        {icon && (
          <TouchableOpacity onPress={onIconPress} style={tw`mr-3`}>
            <Icon name={icon} size={20} color="#9CA3AF" />
          </TouchableOpacity>
        )}
      </View>
      {error ? <Text style={tw`text-red-500 `}>{error}</Text> : null}
    </View>
  );
};

export default Input;
