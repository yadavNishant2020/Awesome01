import React, { useState } from 'react';
import { Modal, View, Text,Image } from 'react-native';
import tw from 'twrnc';
import icon1 from '../public/star_icon.png';
import icon2 from '../public/cross_icon.png';
import CustomButton from '../components/Button';

const Main = () => {
  const [modalVisible, setModalVisible] = useState(true); // State to control modal visibility

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleClick = () => {
    setModalVisible(false); // Close the modal when "Got It" is clicked
  };

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-2xl font-black mb-2 text-gray-700`}>Main App Screen</Text>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={tw`flex-1 justify-around items-center bg-gray-800 bg-opacity-50 p-4`}>
          <View style={tw`flex  justify-between bg-white p-4 rounded-lg w-11/12 h-[35%]`}>
           
            <View style={tw`flex flex-row justify-between items-center mb-4`}>
              <Image source={icon1} style={tw`w-10 h-10`} />
              <Image source={icon2} style={tw`w-10 h-10`} />
            </View>
            <View>
            <Text style={tw`text-xl font-bold text-black mb-1`}>Welcome to Soo</Text>
            <Text style={tw`text-lg text-black`}>Great to have you with us!</Text>
            </View>
            <CustomButton
              onPress={handleClick}
              text="Got It"
              className="bg-[#253BFF] text-white"  
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Main;
