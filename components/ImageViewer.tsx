import { ImageSourcePropType} from 'react-native'
import { Image } from 'expo-image'
import styles from '@/styles/image'

type Props = {
  imgSource: ImageSourcePropType;
  selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  return <Image source={imageSource} style={styles.imageViewer} />;
}