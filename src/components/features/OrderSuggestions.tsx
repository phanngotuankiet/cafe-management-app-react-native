import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import tw from 'twrnc';

type SuggestedOrder = {
  id: string;
  name: string;
  image: string;
  confidence: number; // % khả năng khách hàng sẽ đặt
  reason: string; // Lý do gợi ý
};

// Mock AI suggestions (sau này sẽ được thay thế bằng API call thực)
const mockSuggestions: SuggestedOrder[] = [
  {
    id: '1',
    name: 'Cappuccino',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500',
    confidence: 85,
    reason: 'Ordered 3 times this week in the morning',
  },
  {
    id: '2',
    name: 'Espresso',
    image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=500',
    confidence: 75,
    reason: 'Usually orders after lunch',
  },
];

function OrderSuggestions() {
  return (
    <View style={tw`mt-6`}>
      <Text style={tw`text-xl font-bold text-gray-800 mb-4 px-4`}>
        Recommended for You
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`flex-1`}>
        {mockSuggestions.map(item => (
          <View
            key={item.id}
            style={tw`bg-white rounded-xl shadow-sm m-2 p-4 w-64`}>
            <Image
              source={{ uri: item.image }}
              style={tw`w-full h-40 rounded-xl`}
              resizeMode="cover"
            />
            <View style={tw`mt-2`}>
              <Text style={tw`text-lg font-bold`}>{item.name}</Text>
              <Text style={tw`text-gray-600 text-sm mt-1`}>{item.reason}</Text>
              <View style={tw`flex-row items-center mt-2`}>
                <View 
                  style={[
                    tw`h-2 rounded-full bg-green-500`,
                    { width: `${item.confidence}%` }
                  ]} 
                />
                <Text style={tw`ml-2 text-sm text-gray-500`}>
                  {item.confidence}% match
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default OrderSuggestions;