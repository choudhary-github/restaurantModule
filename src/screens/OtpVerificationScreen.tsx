import { CommonActions } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const OtpVerificationScreen = ({ route, navigation }: any) => {
  // const { userId, email } = route.params;
  const { colors } = useTheme();
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerifyOtp = async () => {
    if (!otp) {
      Alert.alert('Enter OTP');
      return;
    }

    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'Main', state: { routes: [{ name: 'DynamicTabs' }] } }],
    // });

    //  navigation.dispatch(
    //   CommonActions.reset({
    //     index: 0,
    //     routes: [{ name: 'Main' }],
    //   })
    // );

    navigation.navigate("Main")

    // setLoading(true);

    // try {
    //   const res = await fetch('https://yourapi.com/verify-otp', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ userId, otp }),
    //   });

    //   const data = await res.json();

    //   if (data.success) {
    //     Alert.alert('Verified Successfully');
    //     navigation.replace('Main'); // move to main app
    //   } else {
    //     Alert.alert('Invalid OTP', data.message || 'Try again');
    //   }
    // } catch (err) {
    //   console.error(err);
    //   Alert.alert('Error', 'Something went wrong');
    // } finally {
    //   setLoading(false);
    // }
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
        <Button mode="contained" onPress={handleVerifyOtp} loading={loading}>
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
