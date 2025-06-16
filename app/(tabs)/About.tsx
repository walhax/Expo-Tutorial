import { View, Text } from 'react-native'
import style from '@/styles/aboutStyle'
import { Link } from 'expo-router'

export default function About() {
  return (
    <View style={style.background}>
      <Text style={style.text}>About Screen.</Text>
      <Link style={style.button} href={'./'}>Go back to home screen.</Link>
    </View>
  )
}