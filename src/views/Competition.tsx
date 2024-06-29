import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import tw from 'twrnc';
import Card from '../components/Card';
import { DemoCardData } from '../CardData'; 
import { useSearch } from '../SearchContext'; 

function Competition() {
  const { searchQuery } = useSearch();

  const filteredData = DemoCardData.filter((data) =>
    data.heading.toLowerCase().includes(searchQuery.toLowerCase())
  );
  

  return (
    <ScrollView style={tw`flex-1`}>
      <View style={tw`flex-1 px-5 py-4 bg-white`}>
        <Text style={tw`text-2xl font-black mb-2 text-gray-700`}>Competition</Text>
        <Text style={tw`text-gray-700`}>
          An account is needed per one host. If you already have an account for the host of competition you want to sign up, you can login and register.
        </Text>
        <View style={tw`pt-4`}>
          {filteredData.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default Competition;
