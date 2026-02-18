import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors, fonts } from '../theme';
import type {
  TabParamList,
  HomeStackParamList,
  StoriesStackParamList,
  ProfileStackParamList,
} from './types';

// Screens
import HomeScreen from '../screens/home/HomeScreen';
import MeditationScreen from '../screens/home/MeditationScreen';
import EveningReflectionScreen from '../screens/home/EveningReflectionScreen';
import StoriesScreen from '../screens/stories/StoriesScreen';
import StoryDetailScreen from '../screens/stories/StoryDetailScreen';
import AskScreen from '../screens/ask/AskScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import JournalScreen from '../screens/profile/JournalScreen';

// ── Stack navigators for tabs that need nested screens ────────────────────────

const HomeStack = createNativeStackNavigator<HomeStackParamList>();
function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={stackOptions}>
      <HomeStack.Screen name="HomeMain" component={HomeScreen} options={{ title: 'Daily Wisdom' }} />
      <HomeStack.Screen name="Meditation" component={MeditationScreen} options={{ title: 'Meditation' }} />
      <HomeStack.Screen name="EveningReflection" component={EveningReflectionScreen} options={{ title: 'Evening Reflection' }} />
    </HomeStack.Navigator>
  );
}

const StoriesStack = createNativeStackNavigator<StoriesStackParamList>();
function StoriesStackNavigator() {
  return (
    <StoriesStack.Navigator screenOptions={stackOptions}>
      <StoriesStack.Screen name="StoriesMain" component={StoriesScreen} options={{ title: 'Stories' }} />
      <StoriesStack.Screen name="StoryDetail" component={StoryDetailScreen} options={{ title: '' }} />
    </StoriesStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();
function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator screenOptions={stackOptions}>
      <ProfileStack.Screen name="ProfileMain" component={ProfileScreen} options={{ title: 'My Journey' }} />
      <ProfileStack.Screen name="Journal" component={JournalScreen} options={{ title: 'Journal' }} />
    </ProfileStack.Navigator>
  );
}

// ── Tab Navigator ─────────────────────────────────────────────────────────────

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.bgCard,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          height: 60,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: colors.gold,
        tabBarInactiveTintColor: colors.tabInactive,
        tabBarLabelStyle: { fontSize: fonts.sizes.xs, fontWeight: '600' },
        tabBarIcon: ({ color, focused }) => {
          const icons: Record<string, string> = {
            Home: focused ? '☀️' : '🌤️',
            Stories: focused ? '📖' : '📄',
            Ask: focused ? '🕉️' : '💬',
            Profile: focused ? '🧘' : '👤',
          };
          return <Text style={{ fontSize: 20 }}>{icons[route.name]}</Text>;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} options={{ title: 'Daily' }} />
      <Tab.Screen name="Stories" component={StoriesStackNavigator} options={{ title: 'Stories' }} />
      <Tab.Screen name="Ask" component={AskScreen} options={{ title: 'Ask' }} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} options={{ title: 'Journey' }} />
    </Tab.Navigator>
  );
}

// ── Shared stack screen options ───────────────────────────────────────────────

const stackOptions = {
  headerShown: false,
  contentStyle: { backgroundColor: colors.bg },
};
