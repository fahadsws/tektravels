import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from "../Componets/Common/Header/Header";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import style from "../utils/Style";
import Footer from "../Componets/Common/Footer/Footer";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Profile() {
    return (
        <>
            <Header />
            <ScrollView style={[style.bgblack, {
                flex: 1, paddingVertical: responsiveWidth(1),
                paddingHorizontal: responsiveWidth(5)
            }]}>
                <View style={{ height: responsiveHeight(75), justifyContent: 'center' }}>
                    <View>

                        <View style={{ alignItems: 'center', marginBottom: responsiveHeight(2.5) }}>
                            <Image style={{ borderRadius: 100, width: responsiveWidth(30), height: responsiveWidth(30) }} source={{ uri: 'https://img.freepik.com/premium-photo/3d-taxi-driver-cartoon-character_876282-8044.jpg' }} />
                            <TouchableOpacity style={[style.bggrey, {right:responsiveWidth(30), position:'absolute', width: responsiveWidth(8), height: responsiveWidth(8), alignItems: 'center', justifyContent: 'center', borderRadius: 100 }]}>
                                <Icon name="camera" size={15} color={'white'} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ gap: responsiveHeight(1.5) }}>
                            <View style={{ gap: responsiveHeight(1.5) }}>
                                <Text style={[style.white, { fontWeight: '500', fontSize: responsiveFontSize(1.6) }]}>Full Name</Text>
                                <View style={{ borderWidth: 1, borderRadius: 10, borderColor: 'white' }}>
                                    <TextInput autoCapitalize="characters" value="John Doe" placeholder="Enter The Full Name" style={{ paddingHorizontal: responsiveWidth(5), color: 'white' }} placeholderTextColor={'white'} />
                                </View>
                            </View>

                            <View style={{ gap: responsiveHeight(1.5) }}>
                                <Text style={[style.white, { fontWeight: '500', fontSize: responsiveFontSize(1.6) }]}>Email</Text>
                                <View style={{ borderWidth: 1, borderRadius: 10, borderColor: 'white' }}>
                                    <TextInput autoCapitalize="characters" value="johan@gmail.com" placeholder="Enter Your Email" style={{ paddingHorizontal: responsiveWidth(5), color: 'white' }} placeholderTextColor={'white'} />
                                </View>
                            </View>

                            <View style={{ gap: responsiveHeight(1.5) }}>
                                <Text style={[style.white, { fontWeight: '500', fontSize: responsiveFontSize(1.6) }]}>Phone Number</Text>
                                <View style={{ borderWidth: 1, borderRadius: 10, borderColor: 'white' }}>
                                    <TextInput autoCapitalize="characters" value="+91 9343897690" placeholder="Enter Your Phone Number" style={{ paddingHorizontal: responsiveWidth(5), color: 'white' }} placeholderTextColor={'white'} />
                                </View>
                            </View>

                            <View style={{ gap: responsiveHeight(1.5) }}>
                                <Text style={[style.white, { fontWeight: '500', fontSize: responsiveFontSize(1.6) }]}>Gender</Text>
                                <View style={{ borderWidth: 1, borderRadius: 10, borderColor: 'white' }}>
                                    <TextInput autoCapitalize="characters" value="Male" placeholder="Select Gender" style={{ paddingHorizontal: responsiveWidth(5), color: 'white' }} placeholderTextColor={'white'} />
                                </View>
                            </View>
                        </View>


                    </View>
                </View>
            </ScrollView>
            <Footer />
        </>
    )
}