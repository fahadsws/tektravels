import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import style from "../utils/Style";
import Header from "../Componets/Common/Header/Header";
import Footer from "../Componets/Common/Footer/Footer";
import Banner from "../Componets/Common/Banner/Banner";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import BookiengCard from "../Componets/Common/Cards/BokkiengCard";

export default function Home() {
  return (
    <>
      <Header />
      <ScrollView style={[style.bgblack, {
        flex: 1, paddingVertical: responsiveWidth(1),
        paddingHorizontal: responsiveWidth(5)
      }]}>
        <View style={{ marginVertical: responsiveHeight(2) }}>
          <Banner />
        </View>

        <View style={{ gap: responsiveHeight(2), marginBottom: responsiveHeight(2) }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={[style.white, { fontSize: responsiveFontSize(2.2), fontWeight: 'bold' }]}>My Rides</Text>
            <TouchableOpacity>
              <Text style={[style.comoncolor, { fontSize: responsiveFontSize(1.5), fontWeight: '500' }]}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={{ gap: responsiveHeight(1.2) }}>
            <BookiengCard />
            <BookiengCard />
          </View>

        </View>

      </ScrollView>
      <Footer />
    </>
  )
}