import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import style from "../../../utils/Style";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Icon from 'react-native-vector-icons/FontAwesome5';
export default function Banner() {
    return (
        <>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={[{ flexDirection: 'row', gap: responsiveWidth(2.3) }]}>

                    <TouchableOpacity style={[{ backgroundColor: '#b1ec73', overflow: 'hidden', paddingHorizontal: responsiveWidth(5), justifyContent: 'space-around', borderRadius: 25, width: responsiveWidth(42), height: responsiveHeight(25) }]}>
                        <View style={{ gap: responsiveHeight(3) }}>
                            <Text style={{ color: 'white', fontSize: responsiveFontSize(1.8), fontWeight: '700' }}>Active Rides</Text>
                            <Text style={[style.white, { fontWeight: 'bold', fontSize: responsiveFontSize(2.5) }]}>20</Text>
                        </View>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', width: responsiveWidth(10), height: responsiveWidth(10), borderRadius: 13 }}>
                            <Icon name="chevron-right" size={12} color="white" />
                        </TouchableOpacity>
                        <View style={{ position: 'absolute', right: -50, bottom: -50 }}>
                            <Image style={{ width: responsiveWidth(48), height: responsiveWidth(48) }} source={{ uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/businessman-reading-business-report-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--to-do-list-note-read-pack-illustrations-2384306@0.png?f=webp' }} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[{ backgroundColor: '#facf57', overflow: 'hidden', paddingHorizontal: responsiveWidth(5), justifyContent: 'space-around', borderRadius: 25, width: responsiveWidth(42), height: responsiveHeight(25) }]}>
                        <View style={{ gap: responsiveHeight(3) }}>
                            <Text style={{ color: 'black', fontSize: responsiveFontSize(1.8), fontWeight: '700' }}>Total Rides</Text>
                            <Text style={[style.black, { fontWeight: 'bold', fontSize: responsiveFontSize(2.5) }]}>33</Text>
                        </View>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', width: responsiveWidth(10), height: responsiveWidth(10), borderRadius: 13 }}>
                            <Icon name="chevron-right" size={12} color="white" />
                        </TouchableOpacity>
                        <View style={{ position: 'absolute', right: -55, bottom: -40 }}>
                            <Image style={{ width: responsiveWidth(40), height: responsiveWidth(40) }} source={{ uri: 'https://static.vecteezy.com/system/resources/previews/039/200/468/original/3d-taxi-icon-on-transparent-background-png.png' }} />
                        </View>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </>
    )
}