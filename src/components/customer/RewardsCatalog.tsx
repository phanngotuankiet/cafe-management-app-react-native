import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import PagerView from 'react-native-pager-view';
import tw from 'twrnc';

type Reward = {
  id: string;
  name: string;
  points: number;
  image: string;
  description: string;
};

const mockRewards: Reward[] = [
  {
    id: '10',
    name: 'Free Coffee',
    points: 100,
    image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=500',
    description: 'Get any coffee drink free of charge',
  },
  {
    id: '11',
    name: 'Dessert Voucher',
    points: 150,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500',
    description: 'One free dessert of your choice',
  },
  // Thêm rewards khác
];

const RewardsCatalog = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <View style={tw`flex-1 h-[500px] mt-6`}>
      <Text style={tw`text-xl font-bold text-gray-800 mb-4 px-4`}>
        Rewards for you
      </Text>

      <PagerView
        style={tw`flex-1`}
        initialPage={0}
        orientation="horizontal"
        onPageSelected={e => setCurrentPage(e.nativeEvent.position)}>
        {mockRewards.map(reward => (
          <View key={reward.id} style={tw`flex-1 p-4`}>
            <Image
              source={{uri: reward.image}}
              style={tw`w-full h-64 rounded-2xl`}
              resizeMode="cover"
            />

            <View style={tw`mt-4`}>
              <Text style={tw`text-2xl font-bold`}>{reward.name}</Text>
              <Text style={tw`text-lg text-gray-600 mt-2`}>
                {reward.description}
              </Text>
              <Text style={tw`text-xl font-bold text-blue-500 mt-4`}>
                {reward.points} Points
              </Text>
            </View>
          </View>
        ))}
      </PagerView>

      {/* Dots indicator */}
      <View style={tw`flex-row justify-center items-center pb-4`}>
        {mockRewards.map((_, index) => (
          <View
            key={index}
            style={[
              tw`h-2 w-2 mx-1 rounded-full`,
              currentPage === index ? tw`bg-blue-500` : tw`bg-gray-300`,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default RewardsCatalog;
