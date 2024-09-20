import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../../Splash/Intro';
import Splash from '../../Splash/Splash';
import Login from '../../Auth/Login';



const Stack = createStackNavigator();
export default function StackNavigation() {
    return (
        <Stack.Navigator>
            {/* Splash  */}
            <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome} />
            <Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={Splash} />

            {/* Auth  */}
            <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />

             

        </Stack.Navigator>
    );
}