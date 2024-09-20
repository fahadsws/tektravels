import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import style from "../utils/Style";
import Icon from "react-native-vector-icons/Ionicons";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
export default function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
        <>
            <View style={[style.bgblack, { flex: 1, justifyContent: 'space-around', width: '100%', height: '100%', paddingVertical: responsiveHeight(6), paddingHorizontal: responsiveWidth(5) }]}>
                <View>
                    <Text style={[style.white, { textAlign: 'left', fontWeight: 'bold', fontSize: responsiveFontSize(4) }]}>
                        Welcome to<Text style={[style.comoncolor, { fontSize: responsiveFontSize(3) }]}>{`\n`}Tek Travels Driver App Back !</Text>
                    </Text>
                </View>
                <View style={{ width: '100%', gap: responsiveHeight(7) }}>
                    <View style={{ gap: responsiveHeight(2.4), marginTop: responsiveHeight(3) }}>
                        <View style={[style.bgcomoncolor, { borderRadius: 200, width: responsiveWidth(90), paddingHorizontal: responsiveWidth(5), paddingVertical: responsiveHeight(0.8) }]}>
                            <TextInput placeholder="Enter Your Email" placeholderTextColor={'#160C28'} style={{ color: '#160C28' }} />
                        </View>
                        <TouchableOpacity >
                            <Text style={[style.comoncolor, { fontWeight: '500', textAlign: 'right', fontSize: responsiveFontSize(1.5) }]}>Forgot Password?</Text>
                        </TouchableOpacity>
                        <View style={[style.bgcomoncolor, { borderRadius: 100, width: responsiveWidth(90), paddingHorizontal: responsiveWidth(5), paddingVertical: responsiveHeight(0.8), flexDirection: 'row', alignItems: 'center' }]}>
                            <TextInput
                                placeholder="Enter Your Password"
                                placeholderTextColor={'#160C28'}
                                style={{ color: '#160C28', flex: 1 }}
                                secureTextEntry={!passwordVisible}
                            />
                            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                                <Icon name={passwordVisible ? "eye-off" : "eye"} size={24} color="#160C28" />
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={{ gap: responsiveHeight(2.8) }}>
                        <View>
                            <TouchableOpacity style={[style.bgblack, { paddingVertical: responsiveHeight(2.4), alignItems: 'center', borderWidth: 1, borderColor: '#EFCB68', borderRadius: 100 }]}>
                                <Text style={[style.comoncolor, { fontWeight: 'bold' }]}>Log In</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity >
                            <Text style={[style.comoncolor, { fontWeight: '500', textAlign: 'center', fontSize: responsiveFontSize(1.5) }]}>Dont Have a Account , Ready to Join Us?</Text>
                        </TouchableOpacity>
                        <View style={[{ borderColor: 'white', borderBottomWidth: 1.5, opacity: 0.6 }]}></View>
                    </View>
                </View>
            </View>
        </>
    )
}