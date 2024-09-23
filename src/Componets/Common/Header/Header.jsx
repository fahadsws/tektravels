import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome5';
import style from '../../../utils/Style';

export default function Header() {
    return (
        <>
            <View style={[style.bgblack,{
                paddingBottom: responsiveHeight(1), backgroundColor: 'black', paddingTop: responsiveWidth(5),
                paddingHorizontal: responsiveWidth(5), flexDirection: 'row', justifyContent: 'space-between'
            }]}>
                <View style={{ flexDirection: 'row', gap: responsiveWidth(3), alignItems: 'center' }}>
                    <Image style={{ width: responsiveWidth(8), height: responsiveHeight(4), borderRadius: 9 }} source={{ uri: 'https://img.freepik.com/premium-photo/3d-taxi-driver-cartoon-character_876282-8044.jpg' }} />
                    <View style={{gap:responsiveHeight(0.7)}}>
                        <Text style={[style.white,{ fontWeight: 'bold',fontSize: responsiveFontSize(2.5) }]}>Hello, <Text style={{ fontWeight: '500', fontSize: responsiveFontSize(1.7) }}>John</Text></Text>
                        <Text style={[style.white,{ fontWeight: '300', fontSize: responsiveFontSize(1.4)}]}><Icon name="map-marker-alt" size={12} color={'#b1ec73'} /> Dewas Madhya Pradesh</Text>
                    </View>
                </View>

                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', width: responsiveWidth(10), height: responsiveWidth(10), borderRadius: 13 }}>
                    <Icon name="align-right" size={15} color="white" />
                </TouchableOpacity>
            </View>
        </>
    )
}