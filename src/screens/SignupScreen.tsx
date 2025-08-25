import React, { useState } from 'react';
import {
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TextInput, Button, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const { colors } = useTheme();
  const { navigate }: { navigate: Function } = useNavigation();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    panNumber: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleSignup = () => {
    navigate('OtpVerification', {
      data: form,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
            <Text variant="headlineMedium" style={{ color: colors.primary, marginBottom: 20 }}>
              Sign Up
            </Text>

            <TextInput
              label="First Name"
              mode="outlined"
              value={form.firstName}
              onChangeText={val => handleChange('firstName', val)}
              style={styles.input}
            />

            <TextInput
              label="Last Name"
              mode="outlined"
              value={form.lastName}
              onChangeText={val => handleChange('lastName', val)}
              style={styles.input}
            />

            <TextInput
              label="Email"
              mode="outlined"
              value={form.email}
              onChangeText={val => handleChange('email', val)}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              label="Phone Number"
              mode="outlined"
              value={form.phoneNumber}
              onChangeText={val => handleChange('phoneNumber', val)}
              style={styles.input}
              keyboardType="phone-pad"
            />

            <TextInput
              label="PAN Number"
              mode="outlined"
              value={form.panNumber}
              onChangeText={val => handleChange('panNumber', val)}
              style={styles.input}
            />

            <TextInput
              label="Password"
              mode="outlined"
              value={form.password}
              onChangeText={val => handleChange('password', val)}
              style={styles.input}
              secureTextEntry
            />

            <Button
              mode="contained"
              onPress={handleSignup}
              loading={loading}
              disabled={
                loading || !form.firstName || !form.lastName || !form.email || !form.phoneNumber || !form.password
              }
              style={styles.button}
            >
              Create Account
            </Button>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    marginBottom: 16,
  },
  button: {
    width: '100%',
    marginTop: 8,
  },
});
