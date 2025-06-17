import {View } from "react-native";
import { useState } from "react";
import style from "@/styles/indexStyle"
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Buttons";
import imgstyles from "@/styles/image"
import * as imgPicker from "expo-image-picker"


const PlaceholderImage = require('@/assets/images/background-image.png');


export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);


  const pickImage = async () =>{
    let result = await imgPicker.launchImageLibraryAsync({
      quality:1,
      mediaTypes:['images'],
      allowsEditing:true
    })
    console.log(result)
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  }

  return (
    <View
      style={style.background}
    >
      <View style={imgstyles.imageContainer}>
          <ImageViewer imageSource={selectedImage? selectedImage : PlaceholderImage} />
      </View>

      <View style={style.footerContainer}>
        <Button theme="primary" label="Choose a photo" onPress={pickImage} />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}
