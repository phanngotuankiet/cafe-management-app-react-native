import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import PagerView from 'react-native-pager-view';
import tw from 'twrnc';

type Mood = 'Happy' | 'Stressed' | 'Tired' | 'Energetic';

type DrinkSuggestion = {
  id: string;
  name: string;
  image: string;
  description: string;
  mood: Mood;
};

const moodDrinks: Record<Mood, DrinkSuggestion[]> = {
  Happy: [
    {
      id: '1',
      name: 'Fruit Smoothie',
      image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=500',
      description: 'Refreshing blend of seasonal fruits',
      mood: 'Happy',
    },
    {
      id: '5', 
      name: 'Berry Blast',
      image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=500',
      description: 'Mixed berries smoothie with honey',
      mood: 'Happy',
    }
  ],
  Stressed: [
    {
      id: '2',
      name: 'Chamomile Tea',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500',
      description: 'Calming herbal tea to help you relax',
      mood: 'Stressed',
    },
    {
      id: '6',
      name: 'Lavender Latte',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500',
      description: 'Soothing lavender with creamy milk',
      mood: 'Stressed'
    }
  ],
  Tired: [
    {
      id: '3',
      name: 'Double Espresso',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500',
      description: 'Strong coffee to boost your energy',
      mood: 'Tired',
    },
    {
      id: '7',
      name: 'Cold Brew',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500',
      description: 'Smooth and strong cold coffee',
      mood: 'Tired'
    }
  ],
  Energetic: [
    {
      id: '4',
      name: 'Green Tea',
      image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=500',
      description: 'Light and refreshing green tea',
      mood: 'Energetic',
    },
    {
      id: '8',
      name: 'Matcha Latte',
      image: 'https://images.unsplash.com/photo-1536013455962-2168bfcc7baf?w=500',
      description: 'Energizing Japanese green tea latte',
      mood: 'Energetic'
    }
  ],
};

const MoodBasedMenu = () => {
  const [selectedMood, setSelectedMood] = useState<Mood>('Happy');

  return (
    <View style={tw`flex-1 h-[600px] mt-6`}>
      {/* Mood selector */}
      <View style={tw`flex-row justify-around p-4`}>
        {Object.keys(moodDrinks).map(mood => (
          <TouchableOpacity
            key={mood}
            onPress={() => setSelectedMood(mood as Mood)}
            style={[
              tw`px-4 py-2 rounded-full`,
              selectedMood === mood ? tw`bg-blue-500` : tw`bg-gray-200`,
            ]}>
            <Text
              style={[
                tw`font-medium`,
                selectedMood === mood ? tw`text-white` : tw`text-gray-700`,
              ]}>
              {mood}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Drink suggestions pager */}
      <PagerView style={tw`flex-1`} initialPage={0}>
        {moodDrinks[selectedMood].map(drink => (
          <View key={drink.id} style={tw`flex-1 p-4`}>
            <Image
              source={{uri: drink.image}}
              style={tw`w-full h-72 rounded-2xl`}
              resizeMode="cover"
            />
            <View style={tw`mt-4`}>
              <Text style={tw`text-2xl font-bold`}>{drink.name}</Text>
              <Text style={tw`text-gray-600 mt-2`}>{drink.description}</Text>
              <TouchableOpacity
                style={tw`mt-4 bg-blue-500 p-4 rounded-xl`}>
                <Text style={tw`text-white text-center font-bold`}>
                  Order Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </PagerView>
    </View>
  );
};

export default MoodBasedMenu;