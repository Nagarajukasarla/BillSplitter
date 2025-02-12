import React from 'react';
import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function RootLayout() {
    return (
        <View style={{ flex: 1, backgroundColor: '#1a1b1e' }}>
            <StatusBar style="light" />
            <Stack
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#1a1b1e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: '600',
                    },
                    contentStyle: {
                        backgroundColor: '#1a1b1e',
                    },
                    animation: 'slide_from_right',
                    animationDuration: 200,
                    presentation: 'card',
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    fullScreenGestureEnabled: true,
                    animationTypeForReplace: 'push',
                }}
            >
                <Stack.Screen
                    name="index"
                    options={{
                        headerShown: false,
                        animation: 'fade',
                        animationDuration: 200,
                    }}
                />
                <Stack.Screen
                    name="equal"
                    options={{
                        title: 'Equal Split',
                        headerShadowVisible: false,
                        headerBackTitle: 'Back',
                    }}
                />
                <Stack.Screen
                    name="exact"
                    options={{
                        title: 'Exact Split',
                        headerShadowVisible: false,
                        headerBackTitle: 'Back',
                    }}
                />
                <Stack.Screen
                    name="percentage"
                    options={{
                        title: 'Percentage Split',
                        headerShadowVisible: false,
                        headerBackTitle: 'Back',
                    }}
                />
                <Stack.Screen
                    name="+not-found"
                    options={{
                        title: 'Oops!',
                        presentation: 'modal',
                        animation: 'fade',
                    }}
                />
            </Stack>
        </View>
    );
}
