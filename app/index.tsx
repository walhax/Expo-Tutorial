import { Text, View } from "react-native";
import style from "@/styles/indexStyle"
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={style.background}
    >
      <Text style={style.text}>Home Screen.</Text>
      <Link href={'./About'}>Go to About screen</Link>
    </View>
  );
}
