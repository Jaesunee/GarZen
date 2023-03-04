import * as React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Garden from "./components/Garden";
import Taskbar from "./components/Garden";
import Timer from "./components/Timer"

import TabBar from './components/Taskbar.js'


export default function App() {
  return (
    <TabBar/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

