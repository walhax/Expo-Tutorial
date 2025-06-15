import { View, Text } from 'react-native'
import React from 'react'
import style from '@/styles/AboutStyle'
import { Link } from 'expo-router'

export default function About() {
  return (
    <View style={style.background}>
      <Text style={style.text}>About Screen.</Text>
      <Link href={'./'}>Go back to home screen.</Link>
    </View>
  )
}