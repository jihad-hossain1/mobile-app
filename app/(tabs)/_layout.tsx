import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen name="home" options={{ title: 'Home', headerShown: false, tabBarIcon: ({ color, focused }) => <Text>Home</Text> }} />
      </Tabs>
    </>
  )
}

export default TabsLayout