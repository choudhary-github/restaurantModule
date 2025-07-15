import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Text, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const DashboardScreen = () => {
  const theme = useTheme();

  const cards = [
    { title: 'Total Orders', value: '120', subtitle: 'This month' },
    { title: 'Revenue', value: '$8,540', subtitle: 'This month' },
    { title: 'Active Tables', value: '15', subtitle: 'Currently' },
    { title: 'Employees', value: '24', subtitle: 'On shift' },
    { title: 'Pending Tasks', value: '7', subtitle: 'Today' },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text variant="headlineMedium" style={styles.header}>
          Dashboard
        </Text>

        <View style={styles.grid}>
          {cards.map((card, index) => (
            <Card key={index} style={[styles.card, { backgroundColor: theme.colors.surface }]} mode="elevated">
              <Card.Content>
                <Text variant="titleMedium" style={{ color: theme.colors.primary }}>
                  {card.title}
                </Text>
                <Text variant="headlineSmall" style={styles.value}>
                  {card.value}
                </Text>
                <Text variant="bodySmall" style={{ color: theme.colors.onSurface }}>
                  {card.subtitle}
                </Text>
              </Card.Content>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    marginBottom: 16,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    marginBottom: 16,
  },
  value: {
    marginVertical: 8,
  },
});
