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

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

function LoginScreen({navigation}: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Login pressed', {email, password});
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={tw`flex-1`}>
      <ScrollView
        // contentContainerStyle={tw``}
        // showsVerticalScrollIndicator={false}
        // bounces={false}
        keyboardShouldPersistTaps="handled">
        <View style={tw`flex-1 bg-white p-6`}>
          {/* Header Section */}
          <View style={tw`items-center mb-12 mt-20`}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/2935/2935307.png'
              }}
              style={tw`w-32 h-32 mb-4`}
              resizeMode="contain"
            />
            <Text style={tw`text-3xl font-bold text-gray-800`}>
              Welcome Back
            </Text>
            <Text style={tw`text-gray-500 text-center mt-2`}>
              Sign in to continue to your account
            </Text>
          </View>

          {/* Form Section */}
          <View style={tw`space-y-4`}>
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
              <Text style={tw`text-gray-700 mb-2 text-base`}>Password</Text>
              <TextInput
                style={tw`bg-gray-50 rounded-xl p-4 text-gray-800 border border-gray-200`}
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            <TouchableOpacity>
              <Text style={tw`text-blue-500 text-right text-base`}>
                Forgot Password?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={tw`bg-blue-500 rounded-xl p-4 shadow-sm mt-4`}
              onPress={handleLogin}>
              <Text style={tw`text-white text-center text-lg font-semibold`}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>

          {/* Footer Section */}
          <View style={tw`mt-8`}>
            <View style={tw`flex-row justify-center`}>
              <Text style={tw`text-gray-600`}>Don't have an account? </Text>

              <TouchableOpacity onPress={() => navigation.navigate('register')}>
                <Text style={tw`text-blue-500 font-semibold`}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Social Login Section */}
          <View style={tw`mt-12`}>
            <View style={tw`flex-row items-center mb-8`}>
              <View style={tw`flex-1 h-[1px] bg-gray-300`} />
              <Text style={tw`mx-4 text-gray-500`}>Or continue with</Text>
              <View style={tw`flex-1 h-[1px] bg-gray-300`} />
            </View>

            <View style={tw`flex-row justify-center space-x-6`}>
              <TouchableOpacity
                style={tw`w-14 h-14 rounded-full bg-gray-50 items-center justify-center border border-gray-200`}>
                <Text style={tw`text-2xl`}>G</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-14 h-14 rounded-full bg-gray-50 items-center justify-center border border-gray-200`}>
                <Text style={tw`text-2xl`}>f</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-14 h-14 rounded-full bg-gray-50 items-center justify-center border border-gray-200`}>
                <Text style={tw`text-2xl`}>in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;
