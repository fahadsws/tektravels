import { Text, TouchableOpacity, View } from "react-native";
import style from "../utils/Style";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import LottieView from "lottie-react-native";

export default function Splash({navigation}) {
    return (
        <>
            <View style={[{
                backgroundColor: 'black',
                width: '100%', height: '100%', paddingVertical: responsiveHeight(6),
                paddingHorizontal: responsiveWidth(5), justifyContent: 'space-between'
            }]}>


                <View style={{ gap: responsiveHeight(1.5) }}>
                    <Text style={[style.white, { textAlign: 'left', fontWeight: 'bold', fontSize: responsiveFontSize(3.2) }]}>
                        Welcome to the <Text style={[style.comoncolor, { fontSize: responsiveFontSize(2.9) }]}>Tek {`\n`}Travels</Text> Internal Drivers App
                    </Text>
                    <Text style={[style.white, { textAlign: 'left', fontSize: responsiveFontSize(1.5), fontWeight: '300' }]}>
                        We're excited to have you on board. Let's get you set up and ready to start driving. Your journey to more flexibility and{'\n'}earnings begins here!
                    </Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <LottieView
                        source={require('../../assets/animations/welcome.json')}
                        autoPlay
                        loop
                        style={{ width: responsiveWidth(95), height: responsiveHeight(50) }}
                    />

                </View>


                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={[style.bgcomoncolor, { borderWidth: 1, paddingVertical: responsiveHeight(2), alignItems: 'center', borderRadius: 10 }]}>
                        <Text style={[style.black, { fontWeight: 'bold', fontSize: responsiveFontSize(1.7) }]}>
                            Let's Drive!
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}