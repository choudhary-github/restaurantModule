import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, Text, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const tables = [
  { id: 1, status: 'Occupied' },
  { id: 2, status: 'Empty' },
  { id: 3, status: 'Occupied' },
  { id: 4, status: 'Empty' },
  { id: 5, status: 'Occupied' },
  { id: 6, status: 'Empty' },
  { id: 7, status: 'Occupied' },
  { id: 8, status: 'Empty' },
  { id: 9, status: 'Occupied' },
  { id: 10, status: 'Empty' },
];

const TablesScreen = () => {
  const theme = useTheme();

  const renderTable = ({ item }: { item: typeof tables[0] }) => (
    <Card
      style={[
        styles.tableCard,
        {
          backgroundColor:
            item.status === 'Occupied'
              ? theme.colors.errorContainer || '#FFCDD2'
              : theme.colors.tertiaryContainer || '#C8E6C9',
        },
      ]}
      mode="elevated"
    >
      <Card.Content style={styles.cardContent}>
        <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>
          Table {item.id}
        </Text>
        <Text variant="bodySmall" style={{ color: theme.colors.onSurface }}>
          {item.status}
        </Text>
      </Card.Content>
    </Card>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View style={styles.header}>
        <Text variant="headlineMedium">Tables</Text>
      </View>

      <FlatList
        contentContainerStyle={styles.grid}
        data={tables}
        renderItem={renderTable}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default TablesScreen;

const styles = StyleSheet.create({
  header: {
    padding: 16,
    alignItems: 'center',
  },
  grid: {
    paddingHorizontal: 8,
  },
  tableCard: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
  },
  cardContent: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 80,
  },
});
