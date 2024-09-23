import { ScrollView, Text, View } from "react-native";
import Header from "../Componets/Common/Header/Header";
import style from "../utils/Style";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Footer from "../Componets/Common/Footer/Footer";
import BookiengCard from "../Componets/Common/Cards/BokkiengCard";
import LottieView from "lottie-react-native";

export default function MyRides() {
    return (
        <>
            <Header />
            <ScrollView style={[style.bgblack, {
                flex: 1, paddingVertical: responsiveWidth(1),
                paddingHorizontal: responsiveWidth(5)
            }]}>
                {/* <View style={{ marginBottom: responsiveHeight(2.5) }}>
                    <Text style={[style.white, { fontSize: responsiveFontSize(2.3), fontWeight: 'bold' }]}>My Bookings</Text>
                </View> */}
                {/* 
                <View style={{ gap: responsiveHeight(1.2) }}>
                    <BookiengCard />
                    <BookiengCard />
                </View> */}
                <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: responsiveHeight(13) }}>
                    <LottieView
                        source={require('../../assets/animations/welcome.json')}
                        autoPlay
                        loop
                        style={{ width: responsiveWidth(70), height: responsiveHeight(40) }}
                    />
                    <Text style={[style.white, { fontWeight: '700', fontSize: responsiveFontSize(1.5) }]}>No Bookings Found ?</Text>
                </View>

            </ScrollView>

            <Footer />
        </>
    )
}