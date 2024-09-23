import { Image, ScrollView, Text, View } from "react-native";
import Header from "../Componets/Common/Header/Header";
import style from "../utils/Style";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Footer from "../Componets/Common/Footer/Footer";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/FontAwesome';


export default function Detail() {
    return (
        <>
            <Header />
            <View style={[style.bggrey, { alignItems: 'center', paddingHorizontal: responsiveWidth(2), paddingVertical: responsiveWidth(2), height: responsiveHeight(20), justifyContent: 'center' }]}>
                <Image style={{ width: responsiveWidth(45), height: responsiveWidth(31) }} source={{ uri: 'https://static.vecteezy.com/system/resources/previews/020/188/801/original/toyota-innova-crysta-top-model-2393cc-automatic-transmission-turbo-engine-6-speed-gear-free-png.png' }} />
            </View>
            <ScrollView style={[style.bgblack, {
                flex: 1, paddingVertical: responsiveWidth(1),
                paddingHorizontal: responsiveWidth(5)
            }]}>

                <View style={{ marginVertical: responsiveHeight(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ gap: responsiveHeight(1) }}>
                        <Text style={[style.white, { fontWeight: 'bold', fontSize: responsiveFontSize(2.5) }]}>Tata Inova</Text>
                        <Text style={[style.white, { fontWeight: '400', fontSize: responsiveFontSize(1.1) }]}>BOOKIENG ID A89POIUJ900</Text>
                    </View>
                    <View style={{ gap: responsiveHeight(1) }}>
                        <Text style={[style.white, { fontWeight: 'bold', fontSize: responsiveFontSize(1.3) }]}>April 3, 20024 | 08:00 Am</Text>
                        <Text style={[style.comoncolor, { fontWeight: 'bold', fontSize: responsiveFontSize(1.8), textAlign: 'right' }]}>70 KM</Text>
                    </View>
                </View>


                <View style={{ marginVertical: responsiveHeight(2), gap: responsiveHeight(1) }}>
                    <Text style={[style.white, { fontWeight: '400', fontSize: responsiveFontSize(1.1) }]}>Trip From | To</Text>
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
                </View>


                <View style={{ marginVertical: responsiveHeight(2), gap: responsiveHeight(1) }}>
                    <Text style={[style.white, { fontWeight: '400', fontSize: responsiveFontSize(1.1) }]}>PICK UP LOCATION</Text>
                    <Text style={[style.white, { fontWeight: 'bold', fontSize: responsiveFontSize(1.8) }]}><Icon name="map-marker-alt" size={12} color={'#ffc21f'} /> Bada Bazar Dewas Madhya Pradesh</Text>
                </View>

                <View style={{gap:responsiveHeight(1),marginVertical:responsiveHeight(2)}}>
                    <Text style={[style.white, { fontWeight: '400', fontSize: responsiveFontSize(1.1) }]}>Price Breakaup</Text>


                    <View style={{gap:responsiveHeight(1.5)}}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={[style.white, { fontWeight: 'bold', fontSize: responsiveFontSize(1.8) }]}>Base Fare</Text>
                            <Text style={[style.white, { fontWeight: 'bold', fontSize: responsiveFontSize(1.8) }]}><Icon2 color='#b1ec73' size={12} name="inr" /> 300.00</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={[style.white, { fontWeight: 'bold', fontSize: responsiveFontSize(1.8) }]}>With Delivery</Text>
                            <Text style={[style.white, { fontWeight: 'bold', fontSize: responsiveFontSize(1.8) }]}><Icon2 color='#b1ec73' size={12} name="inr" /> 300.00</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={[style.white, { fontWeight: 'bold', fontSize: responsiveFontSize(1.8) }]}>Taxes</Text>
                            <Text style={[style.white, { fontWeight: 'bold', fontSize: responsiveFontSize(1.8) }]}><Icon2 color='#b1ec73' size={12} name="inr" /> 300.00</Text>
                        </View>

                        <View style={{marginTop:responsiveHeight(1), flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={[style.comoncolor, { fontWeight: 'bold', fontSize: responsiveFontSize(1.8) }]}>Total</Text>
                            <Text style={[style.comoncolor, { fontWeight: 'bold', fontSize: responsiveFontSize(1.8) }]}><Icon2 color='#b1ec73' size={12} name="inr" /> 900.00</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
            <Footer />
        </>
    )
}