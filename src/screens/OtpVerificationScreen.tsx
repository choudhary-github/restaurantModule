import { CommonActions } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { useVerifyOtpMutation } from '../redux/services/authApi';
import { setCredentials } from '../features/auth/authSlice'; // ✅ to store token/user

const OtpVerificationScreen = ({ route, navigation }: any) => {
  const { data } = route.params; // contains email or mobile from previous screen
  const { colors } = useTheme();

  const dispatch = useDispatch<AppDispatch>();
  const [otp, setOtp] = useState('');

  // ✅ RTK Query mutation hook
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();

  const handleVerifyOtp = async () => {
    if (!otp) {
      Alert.alert('Enter OTP');
      return;
    }

    try {
      const result = await verifyOtp({ email: data?.email, otp }).unwrap();

      // ✅ If success → save token & user to redux
      // dispatch(
      //   setCredentials({
      //     user: data,
      //     accessToken: result.data.token,
      //     refreshToken: result.data.refreshToken,
      //     // accessToken: result.data.accessToken,
      //     // refreshToken: result.data.refreshToken,
      //   }),
      // );

      // ✅ Navigate to Home (reset stack)
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        }),
      );
    } catch (error: any) {
      Alert.alert('Error', error?.data?.message || 'Invalid OTP');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={styles.container}>
        <Text variant="headlineSmall" style={styles.title}>
          Enter OTP
        </Text>
        <TextInput
          label="OTP"
          mode="outlined"
          value={otp}
          onChangeText={setOtp}
          style={styles.input}
          keyboardType="numeric"
        />
        <Button mode="contained" onPress={handleVerifyOtp} loading={isLoading} disabled={isLoading}>
          Verify
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default OtpVerificationScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { textAlign: 'center', marginBottom: 20 },
  input: { marginBottom: 16 },
});
