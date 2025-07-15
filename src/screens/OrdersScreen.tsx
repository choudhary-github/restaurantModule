import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, Text, useTheme, Chip } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const orders = [
  {
    id: 'ORD001',
    table: 5,
    customer: 'John Doe',
    amount: '$120',
    status: 'Completed',
    date: '2025-07-10',
  },
  {
    id: 'ORD002',
    table: 2,
    customer: 'Jane Smith',
    amount: '$80',
    status: 'In Progress',
    date: '2025-07-12',
  },
  {
    id: 'ORD003',
    table: 7,
    customer: 'Bob Johnson',
    amount: '$200',
    status: 'Pending',
    date: '2025-07-13',
  },
  {
    id: 'ORD004',
    table: 4,
    customer: 'Alice Williams',
    amount: '$60',
    status: 'Completed',
    date: '2025-07-13',
  },
  {
    id: 'ORD005',
    table: 3,
    customer: 'Michael Brown',
    amount: '$150',
    status: 'Cancelled',
    date: '2025-07-14',
  },
];

const OrdersScreen = () => {
  const theme = useTheme();

  const renderOrder = ({ item }: { item: (typeof orders)[0] }) => (
    <Card style={[styles.card, { backgroundColor: theme.colors.surface }]} mode="elevated">
      <Card.Content>
        <View style={styles.headerRow}>
          <Text variant="titleMedium" style={{ color: theme.colors.primary }}>
            {item.id}
          </Text>
          <Chip
            style={{
              backgroundColor: getStatusColor(item.status, theme),
            }}
            textStyle={{ color: 'white' }}
            compact
          >
            {item.status}
          </Chip>
        </View>

        <View style={styles.bodyRow}>
          <View style={styles.col}>
            <Text variant="labelSmall" style={styles.label}>
              Customer
            </Text>
            <Text variant="bodyMedium">{item.customer}</Text>
          </View>
          <View style={styles.col}>
            <Text variant="labelSmall" style={styles.label}>
              Table
            </Text>
            <Text variant="bodyMedium">#{item.table}</Text>
          </View>
        </View>

        <View style={styles.bodyRow}>
          <View style={styles.col}>
            <Text variant="labelSmall" style={styles.label}>
              Amount
            </Text>
            <Text variant="bodyMedium">{item.amount}</Text>
          </View>
          <View style={styles.col}>
            <Text variant="labelSmall" style={styles.label}>
              Date
            </Text>
            <Text variant="bodyMedium">{item.date}</Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <FlatList
        contentContainerStyle={styles.container}
        data={orders}
        renderItem={renderOrder}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const getStatusColor = (status: string, theme: any) => {
  switch (status) {
    case 'Completed':
      return '#4CAF50';
    case 'In Progress':
      return '#2196F3';
    case 'Pending':
      return '#FF9800';
    case 'Cancelled':
      return '#F44336';
    default:
      return theme.colors.onSurface;
  }
};

export default OrdersScreen;

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
  bodyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  col: {
    width: '48%',
  },
  label: {
    color: 'gray',
    marginBottom: 2,
  },
});
