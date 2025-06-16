import { ImageSourcePropType} from 'react-native'
import { Image } from 'expo-image'
import styles from '@/styles/image'

type Props={
 imageSource:ImageSourcePropType
}

export default function ImageViewer({imageSource}:Props) {
  return (
    <Image source={imageSource} style={styles.imageViewer}/>
  )
}