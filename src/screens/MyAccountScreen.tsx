import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Card, Text, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const MyAccountScreen = () => {
  const theme = useTheme();

  const user = {
    name: 'Ankit Kumar',
    email: 'ankit@example.com',
    phone: '+91 9876543210',
    role: 'Manager',
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View style={styles.container}>
        <Avatar.Text 
          size={100} 
          label={user.name.split(' ').map(n => n[0]).join('').toUpperCase()} 
          style={{ backgroundColor: theme.colors.primary }}
        />

        <Text variant="headlineSmall" style={styles.name}>
          {user.name}
        </Text>
        <Text variant="bodyMedium" style={{ color: theme.colors.onSurfaceVariant }}>
          {user.email}
        </Text>

        <Card style={styles.card} mode="outlined">
          <Card.Content>
            <View style={styles.detailRow}>
              <Text style={styles.label}>Phone:</Text>
              <Text>{user.phone}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.label}>Role:</Text>
              <Text>{user.role}</Text>
            </View>
          </Card.Content>
        </Card>

        <Button 
          mode="contained" 
          onPress={() => {}} 
          style={styles.button}
        >
          Edit Profile
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  name: {
    marginTop: 16,
  },
  card: {
    width: '100%',
    marginTop: 24,
    borderRadius: 8,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  label: {
    fontWeight: 'bold',
    color: 'gray',
  },
  button: {
    marginTop: 32,
    width: '60%',
  },
});
