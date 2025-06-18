import {View } from "react-native";
import { useState } from "react";
import style from "@/styles/indexStyle"
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Buttons";
import imgstyles from "@/styles/image"
import * as imgPicker from "expo-image-picker"
import IconButton from '@/components/IconButton';
import CircleButton from '@/components/CircleButton';

const PlaceholderImage = require('@/assets/images/background-image.png');


export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);


  const pickImage = async () =>{
    let result = await imgPicker.launchImageLibraryAsync({
      quality:1,
      mediaTypes:['images'],
      allowsEditing:true
    })
    console.log(result)
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  }


  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    // we will implement this later
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };


  return (
    <View
      style={style.background}
    >
      <View style={imgstyles.imageContainer}>
          <ImageViewer imageSource={selectedImage? selectedImage : PlaceholderImage} />
      </View>
      {showAppOptions? (    
        <View style={style.optionsContainer}>
          <View style={style.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>)
      :
        <View style={style.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImage} />
          <Button label="Use this photo" onPress={()=>setShowAppOptions(true)} />
        </View>
      }
    </View>
  );
}
