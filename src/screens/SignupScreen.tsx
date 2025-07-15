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

const SignupScreen = () => {
  const { colors } = useTheme();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = () => {
    if (password !== confirmPassword) {
      Alert.alert("Passwords don't match");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      console.log('Signed up with:', { name, email, password });
    }, 1500);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
            <Text variant="headlineMedium" style={{ color: colors.primary, marginBottom: 20 }}>
              Sign Up
            </Text>

            <TextInput label="Name" mode="outlined" value={name} onChangeText={setName} style={styles.input} />

            <TextInput
              label="Email"
              mode="outlined"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              label="Password"
              mode="outlined"
              value={password}
              onChangeText={setPassword}
              style={styles.input}
              secureTextEntry
            />

            <TextInput
              label="Confirm Password"
              mode="outlined"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              style={styles.input}
              secureTextEntry
            />

            <Button
              mode="contained"
              onPress={handleSignup}
              loading={loading}
              disabled={loading || !name || !email || !password || !confirmPassword}
              style={styles.button}
            >
              Sign Up
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
