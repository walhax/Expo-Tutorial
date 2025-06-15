import { View, Text } from 'react-native'
import React from 'react'
import style from '@/styles/AboutStyle'

export default function About() {
  return (
    <View style={style.background}>
      <Text style={style.text}>This is About screen.</Text>
    </View>
  )
}