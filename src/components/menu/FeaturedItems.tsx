/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView, Text, Image, useWindowDimensions} from 'react-native';
import tw from 'twrnc';

type FeaturedItem = {
  id: number;
  name: string;
  image: string;
  description: string;
};

const featuredItems: FeaturedItem[] = [
  {
    id: 1,
    name: 'Espresso',
    image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=500',
    description: 'Rich and bold espresso shot.',
  },
  {
    id: 2,
    name: 'Cappuccino',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500',
    description: 'Creamy and frothy cappuccino.',
  },
  {
    id: 3,
    name: 'Latte',
    image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=500',
    description: 'Smooth and milky latte.',
  },
  {
    id: 4,
    name: 'Mocha',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=500',
    description: 'Perfect blend of coffee and chocolate.',
  },
  {
    id: 5,
    name: 'Cold Brew',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500',
    description: 'Smooth, cold-steeped coffee.',
  },
];

function FeaturedItems({pagingEnabled = false}: {pagingEnabled?: boolean}) {
  const {width} = useWindowDimensions();

  return (
    <View style={tw`mt-6`}>
      <Text style={tw`text-xl font-bold text-gray-800 mb-4 px-4`}>
        Featured Items
      </Text>
      <ScrollView
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        style={tw`flex-1`}>
        {featuredItems.map(item => (
          <View
            key={item.id}
            style={[
              tw`bg-white rounded-xl shadow-sm m-2 p-4`,
              {width: pagingEnabled ? width - 40 : 200},
            ]}>
            <Image
              source={{uri: item.image}}
              style={tw`w-full h-40 rounded-xl`}
              resizeMode="cover"
            />
            <Text style={tw`text-lg font-bold mt-2`}>{item.name}</Text>
            <Text style={tw`text-gray-600 mt-1`}>{item.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default FeaturedItems;
