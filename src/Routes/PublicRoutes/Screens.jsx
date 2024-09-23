import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../../Splash/Intro';
import Splash from '../../Splash/Splash';
import Login from '../../Auth/Login';
import Home from '../../Pages/Home';
import ForgotPassword from '../../Auth/ForgotPassword/ForgotPassword';
import MyRides from '../../Pages/MyRides';
import Profile from '../../Pages/Profile';



const Stack = createStackNavigator();
export default function StackNavigation() {
    return (
        <Stack.Navigator>
            {/* Splash  */}
            <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome} />
            <Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={Splash} />

            {/* Auth  */}
            <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
            <Stack.Screen options={{ headerShown: false }} name="Forgot" component={ForgotPassword} />
            
            {/* Protected Routes  */}
            <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
            <Stack.Screen options={{ headerShown: false }} name="MyRides" component={MyRides} />
            <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />


             

        </Stack.Navigator>
    );
}