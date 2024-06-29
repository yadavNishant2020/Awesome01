import React from 'react';
import { TextInput, View } from 'react-native';
import tw from 'twrnc'; // Import tw from your Tailwind CSS setup
import { useSearch } from '../SearchContext'; // Import useSearch hook

interface SearchBarProps {
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  const { setSearchQuery } = useSearch();

  return (
    <View style={tw`mr-6 w-full`}>
      <TextInput
        placeholder={placeholder}
        onChangeText={setSearchQuery}
        placeholderTextColor="#000000"
        style={tw`bg-gray-100 rounded-2xl p-3 text-black`}
      />
    </View>
  );
};

export default SearchBar;
