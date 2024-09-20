import { View, Image } from "react-native";
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from "react";
export default function Welcome() {
  const navigation = useNavigation();
  // const data = useSelector((state) => state?.userdetail)
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SplashScreen');
    }, 2000);
  }, [navigation]);
  return (
    <>
      <View style={{ backgroundColor: 'black', height: '100%', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
          <Image source={{uri:'https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png'}} style={{ width: responsiveWidth(36.5), height: responsiveHeight(15) }} />
      </View>
    </>
  );
}