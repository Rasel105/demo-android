import { View, ImageBackground } from 'react-native';
import React from 'react';

export default function BackgroundImage({ children }) {
    return (
        <View>
            <ImageBackground source={require("../assets/loginImage.png")} style={{ height: "100%", backgroundColor: "blue" }} />
            <View style={{ position: 'absolute' }}>
                {children}
            </View>
        </View>
    )
}