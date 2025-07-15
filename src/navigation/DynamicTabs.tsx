import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { tabsConfig } from './tabsConfig';

const Tab = createBottomTabNavigator();

const DynamicTabs = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
        tabBarStyle: { backgroundColor: theme.colors.background },
        tabBarLabelStyle: { fontSize: 12 },
        animation: 'shift'
      }}
    >
      {tabsConfig.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarLabel: tab.label,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name={tab.icon} color={color} size={size} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default DynamicTabs;
