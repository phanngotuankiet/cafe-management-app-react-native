import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import tw from 'twrnc';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RegisterScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

function RegisterScreen({navigation}: RegisterScreenProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    console.log('Register pressed', {fullName, email, phone, password});
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={tw`flex-1`}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={tw`flex-1 bg-white p-6`}>
          {/* Header Section */}
          <View style={tw`items-center mb-8 mt-16`}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/2935/2935307.png',
              }}
              style={tw`w-24 h-24 mb-4`}
              resizeMode="contain"
            />
            <Text style={tw`text-3xl font-bold text-gray-800`}>
              Create Account
            </Text>
            <Text style={tw`text-gray-500 text-center mt-2`}>
              Join us and start managing your cafe
            </Text>
          </View>

          {/* Form Section */}
          <View style={tw`space-y-4`}>
            <View>
              <Text style={tw`text-gray-700 mb-2 text-base`}>Full Name</Text>
              <TextInput
                style={tw`bg-gray-50 rounded-xl p-4 text-gray-800 border border-gray-200`}
                placeholder="Enter your full name"
                value={fullName}
                onChangeText={setFullName}
                autoCapitalize="words"
              />
            </View>

            <View>
              <Text style={tw`text-gray-700 mb-2 text-base`}>Email</Text>
              <TextInput
                style={tw`bg-gray-50 rounded-xl p-4 text-gray-800 border border-gray-200`}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View>
              <Text style={tw`text-gray-700 mb-2 text-base`}>Phone Number</Text>
              <TextInput
                style={tw`bg-gray-50 rounded-xl p-4 text-gray-800 border border-gray-200`}
                placeholder="Enter your phone number"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
              />
            </View>

            <View>
              <Text style={tw`text-gray-700 mb-2 text-base`}>Password</Text>
              <TextInput
                style={tw`bg-gray-50 rounded-xl p-4 text-gray-800 border border-gray-200`}
                placeholder="Create a password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            <View>
              <Text style={tw`text-gray-700 mb-2 text-base`}>
                Confirm Password
              </Text>
              <TextInput
                style={tw`bg-gray-50 rounded-xl p-4 text-gray-800 border border-gray-200`}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />
            </View>

            <TouchableOpacity
              style={tw`bg-blue-500 rounded-xl p-4 shadow-sm mt-6`}
              onPress={handleRegister}>
              <Text style={tw`text-white text-center text-lg font-semibold`}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>

          {/* Footer Section */}
          <View style={tw`flex-row justify-center mt-8`}>
            <Text style={tw`text-gray-600`}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
              <Text style={tw`text-blue-500 font-semibold`}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default RegisterScreen;