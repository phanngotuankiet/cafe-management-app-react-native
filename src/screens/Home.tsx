import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  useWindowDimensions,
} from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import FeaturedItems from '../components/menu/FeaturedItems';
import OrderSuggestions from '../components/features/OrderSuggestions';
import MoodBasedMenu from '../components/features/MoonBasedMenu';
import RewardsCatalog from '../components/customer/RewardsCatalog';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

function HomeScreen({navigation}: Props) {
  const {width} = useWindowDimensions();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  }, []);

  const StatCard = ({title, value, color}: any) => (
    <View style={tw`${width > 768 ? 'w-1/4' : 'w-1/2'} p-2`}>
      <View style={tw`${color} rounded-xl p-4 shadow-sm`}>
        <Text style={tw`text-white text-lg font-medium`}>{title}</Text>
        <Text style={tw`text-white text-2xl font-bold mt-2`}>{value}</Text>
      </View>
    </View>
  );

  const QuickAction = ({iconName, title, onPress}: any) => (
    <TouchableOpacity
      style={tw`${width > 768 ? 'w-1/6' : 'w-1/3'} p-2`}
      onPress={onPress}>
      <View style={tw`bg-white rounded-xl p-4 items-center shadow-sm`}>
        <Icon name={iconName} size={32} style={tw`text-gray-700 mb-2`} />
        <Text style={tw`text-gray-600 text-center`}>{title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView
      style={tw`flex-1 bg-gray-50`}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {/* Header with Logout */}
      <View style={tw`p-6 bg-blue-500`}>
        <View style={tw`flex-row justify-between items-center`}>
          <View>
            <Text style={tw`text-white text-2xl font-bold`}>
              Welcome back, Admin
            </Text>
            <Text style={tw`text-blue-100 mt-1`}>
              Here's what's happening today
            </Text>
          </View>
          <TouchableOpacity
            style={tw`bg-blue-600 p-2 rounded-full`}
            onPress={() => navigation.navigate('login')}>
            <Icon name="logout" size={24} style={tw`text-white`} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Stats Overview */}
      <View style={tw`flex-row flex-wrap px-2 -mt-6`}>
        <StatCard title="Today's Sales" value="$1,234" color="bg-green-500" />
        <StatCard title="Active Tables" value="12/20" color="bg-blue-500" />
        <StatCard title="Pending Orders" value="8" color="bg-orange-500" />
        <StatCard title="Low Stock Items" value="3" color="bg-red-500" />
      </View>

      {/* Featured Items */}
      <FeaturedItems pagingEnabled={false} />

      <OrderSuggestions />

      <MoodBasedMenu />

      <RewardsCatalog />

      {/* Quick Actions */}
      <View style={tw`px-4 mt-6`}>
        <Text style={tw`text-xl font-bold text-gray-800 mb-4 px-2`}>
          Quick Actions
        </Text>
        <View style={tw`flex-row flex-wrap`}>
          <QuickAction
            iconName="cart-plus"
            title="New Order"
            onPress={() => console.log('New Order')}
          />
          <QuickAction
            iconName="table-furniture"
            title="Tables"
            onPress={() => console.log('Tables')}
          />
          <QuickAction
            iconName="chart-bar"
            title="Reports"
            onPress={() => console.log('Reports')}
          />
          <QuickAction
            iconName="package-variant"
            title="Inventory"
            onPress={() => console.log('Inventory')}
          />
          <QuickAction
            iconName="account-group"
            title="Staff"
            onPress={() => console.log('Staff')}
          />
          <QuickAction
            iconName="cog"
            title="Settings"
            onPress={() => console.log('Settings')}
          />
        </View>
      </View>

      {/* Recent Activity */}
      <View style={tw`px-4 mt-6 mb-6`}>
        <Text style={tw`text-xl font-bold text-gray-800 mb-4 px-2`}>
          Recent Activity
        </Text>
        <View style={tw`bg-white rounded-xl shadow-sm`}>
          {[1, 2, 3].map(i => (
            <View
              key={i}
              style={tw`p-4 border-b border-gray-100 flex-row justify-between items-center`}>
              <View>
                <Text style={tw`font-medium text-gray-800`}>Order #{i}234</Text>
                <Text style={tw`text-gray-500 text-sm`}>Table 5 • 2 items</Text>
              </View>

              <TouchableOpacity style={tw`bg-blue-50 px-3 py-1 rounded-full`}>
                <Text style={tw`text-blue-500`}>View</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
