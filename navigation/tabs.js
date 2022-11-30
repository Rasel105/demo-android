import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeScreen from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';
import QRCodeScreen from '../screens/QRCodeScreen';
import ProductScreen from '../screens/ProductScreen';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {

    return (
        <Tab.Navigator
            initialRouteName="Account"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size, colour }) => {
                    let iconName;
                    if (route.name === "Home") {
                        iconName = focused ? "home-variant" : "home-variant-outline";
                        size = focused ? size + 15 : size + 8
                    } else if (route.name === "Contact") {
                        iconName = focused ? "contacts" : "contacts-outline";
                        size = focused ? size + 15 : size + 8
                    }
                    else if (route.name === "Scan") {
                        iconName = focused ? "qrcode-scan" : "qrcode-plus";
                        size = focused ? size + 15 : size + 8
                    }
                    else if (route.name === "Products") {
                        iconName = focused ? "animation" : "animation-outline";
                        size = focused ? size + 15 : size + 8
                    }
                    else if (route.name === "Account") {
                        iconName = focused ? "account-circle" : "account-circle-outline";
                        size = focused ? size + 15 : size + 8
                    }
                    return <Ionic name={iconName} size={size} colour={colour} />
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'black',
                tabBarShowLabel: true,
                tabBarStyle: {
                    height: 60,
                    fontSize: 10,
                },
                tabBarLabelStyle: {
                    fontSize: 15
                },
                headerShown: false
            })}
        >
            <Tab.Screen name='Home' component={HomeScreen}></Tab.Screen>
            <Tab.Screen name='Contact' component={ContactScreen}></Tab.Screen>
            <Tab.Screen name='Scan' component={QRCodeScreen} ></Tab.Screen>
            <Tab.Screen name='Products' component={ProductScreen}></Tab.Screen>
            <Tab.Screen name="Account">
                {() => (
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Login"
                            component={Login}
                        />
                        <Stack.Screen name="Signup" component={Signup} />
                        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
                    </Stack.Navigator>
                )}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default Tabs;

const style = StyleSheet.create({
    shadow: {
        shadowColor: "#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});