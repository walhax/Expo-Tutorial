import {View } from "react-native";
import style from "@/styles/indexStyle"
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Buttons";
import imgstyles from "@/styles/image"


const PlaceholderImage = require('@/assets/images/background-image.png');


export default function Index() {
  return (
    <View
      style={style.background}
    >
    <View style={imgstyles.imageContainer}>
        <ImageViewer imageSource={PlaceholderImage} />
    </View>

    <View style={imgstyles.footerContainer}>
      <Button theme="primary" label="Choose a photo" />
      <Button label="Use this photo" />
    </View>
    </View>
  );
}
