import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, Chip, Text, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const employees = [
  { id: 'EMP001', name: 'John Doe', status: 'Available', shift: 'Morning' },
  { id: 'EMP002', name: 'Jane Smith', status: 'On Leave', shift: 'N/A' },
  { id: 'EMP003', name: 'Michael Brown', status: 'Available', shift: 'Evening' },
  { id: 'EMP004', name: 'Emily Johnson', status: 'On Leave', shift: 'N/A' },
  { id: 'EMP005', name: 'David Lee', status: 'Available', shift: 'Night' },
];

const EmployeeScreen = () => {
  const theme = useTheme();

  const renderEmployee = ({ item }: { item: (typeof employees)[0] }) => (
    <Card style={[styles.card, { backgroundColor: theme.colors.surface }]} mode="elevated">
      <Card.Content>
        <View style={styles.headerRow}>
          <Text variant="titleMedium" style={{ color: theme.colors.primary }}>
            {item.name}
          </Text>
          <Chip
            style={{
              backgroundColor: getStatusColor(item.status),
            }}
            textStyle={{ color: 'white', fontSize: 12 }}
            compact
          >
            {item.status}
          </Chip>
        </View>

        <View style={styles.detailRow}>
          <Text variant="labelSmall" style={styles.label}>
            ID:
          </Text>
          <Text>{item.id}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text variant="labelSmall" style={styles.label}>
            Shift:
          </Text>
          <Text>{item.shift}</Text>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <FlatList
        contentContainerStyle={styles.container}
        data={employees}
        renderItem={renderEmployee}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Available':
      return '#4CAF50'; // green
    case 'On Leave':
      return '#F44336'; // red
    default:
      return 'gray';
  }
};

export default EmployeeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  card: {
    marginBottom: 12,
    borderRadius: 8,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailRow: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 4,
    color: 'gray',
  },
});
