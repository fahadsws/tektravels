import { Image, Text, TouchableOpacity, View } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import style from "../../../utils/Style";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function BookiengCard() {
    return (
        <>
            <TouchableOpacity style={[style.bggrey, {
                borderRadius: 10, paddingVertical: responsiveWidth(4),
                paddingHorizontal: responsiveWidth(5), justifyContent: 'center'
            }]}>
                <View style={{ flexDirection: 'row', gap: responsiveWidth(3) }}>
                    <View style={[style.bgwhite, { borderRadius: 10, paddingHorizontal: responsiveWidth(2), paddingVertical: responsiveWidth(2) }]}>
                        <Image style={{ width: responsiveWidth(22), height: responsiveWidth(15) }} source={{ uri: 'https://static.vecteezy.com/system/resources/previews/020/188/801/original/toyota-innova-crysta-top-model-2393cc-automatic-transmission-turbo-engine-6-speed-gear-free-png.png' }} />
                    </View>
                    <View style={{ gap: responsiveHeight(0.9) }}>
                        <View style={{ gap: responsiveHeight(0.5) }}>
                            <Text style={[style.white, { fontWeight: 'bold', fontSize: responsiveFontSize(1.7) }]}>Tata Inova</Text>
                            <Text style={[style.white, { fontWeight: '400', fontSize: responsiveFontSize(1.1) }]}>BOOKIENG ID A89POIUJ900</Text>
                        </View>
                        <Text style={[style.white, { fontWeight: 'bold', fontSize: responsiveFontSize(1.3) }]}>April 3, 20024 | 08:00 Am</Text>
                    </View>
                </View>
                <View style={{ marginTop: responsiveHeight(1), gap: responsiveHeight(1), flexDirection: 'row' }}>
                    <Text style={[style.white, { fontWeight: '500', fontSize: responsiveFontSize(1.2) }]}>
                        <Icon name="map-marker-alt" size={9} color={'#ffc21f'} />  Silver Home Hotel, Indore M.P
                    </Text>

                    <Text style={[style.white, { fontWeight: '300', fontSize: responsiveFontSize(0.5) }]}>
                        |{'\n'}
                        |{'\n'}
                    </Text>

                    <Text style={[style.white, { fontWeight: '500', fontSize: responsiveFontSize(1.2) }]}>
                        <Icon name="map-marker-alt" size={9} color={'#b1ec73'} />  Silver Home Hotel, Indore M.P
                    </Text>
                </View>
            </TouchableOpacity>
        </>
    )
}