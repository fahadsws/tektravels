import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Icon from 'react-native-vector-icons/FontAwesome5';
import style from '../../../utils/Style';
import { useNavigation, useNavigationState } from '@react-navigation/native';
export default function Footer(){
    const navigation = useNavigation();
    const routes = useNavigationState(state => state.routes);
    const currentRoute = routes[routes.length - 1].name;

    const isActive = (route) => currentRoute === route;
    return(
        <>
                <View style={[styles.footerContainer, { position: 'relative' }]}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconContainer}>
                <Icon name="home" size={15} color={isActive('Home') ? '#b1ec73' : 'white'} />
                <Text style={[isActive('Home') ? styles.iconText : styles.iconText2]}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('MyRides')} style={styles.iconContainer}>
                <Icon name="car" size={15} color={isActive('MyRides') ? '#b1ec73' : 'white'} />
                <Text style={[isActive('MyRides') ? styles.iconText : styles.iconText2]}>My Bookings</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.iconContainer}>
                <Icon name="user" size={15} color={isActive('Profile') ? '#b1ec73' : 'white'} />
                <Text style={[isActive('Profile') ? styles.iconText : styles.iconText2]}>Profile</Text>
            </TouchableOpacity>

        </View>
        </>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#161616',
        paddingVertical: responsiveHeight(2.5),
        borderTopColor: '#d43132',
        shadowColor: "red",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: responsiveHeight(0.7),
    },
    iconText: {
        fontSize: responsiveFontSize(1.5),
        fontWeight: '700',
        color: '#b1ec73'
    },
    iconText2: {
        fontSize: responsiveFontSize(1.5),
        fontWeight: '700',
        color: 'white'
    },
});