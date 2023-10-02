import React, { useContext, useState } from 'react';
import { NavigationProvider } from './NavigationContainer';
import Router from './router';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';
import Footer from '../components/shared/Footer';
import colors from '../utils/colors';
import MainNavbar from '../components/shared/Navbar/MainNavbar';
import HomeScreen from '../screen/home/HomeScreen';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Navigator = () => {
    const { navigation, translate, drawerRef, routine } = useContext(NavigationProvider)
    const rest = {
        navigation: navigation,
        translate,
        drawerRef,
        routine
    }
    const router = Router(rest)
    const Render: any = router?.component || function () {
        return (
            <View style={{ alignItems: 'center' }}>
                <Image style={{ width: 300, objectFit: 'contain' }} source={require('../assets/images/not_found.png')} />
            </View>)
    }
    // AsyncStorage.removeItem('link').then(r => {
    //     console.log(r)
    // })

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>
            {
                router?.navbar || <MainNavbar drawerRef={drawerRef} />
            }
            <ScrollView
                // contentInsetAdjustmentBehavior="automatic"
                style={[
                    // backgroundStyle,
                    { paddingBottom: 80, display: 'flex' }]
                }
            >
                <Render {...rest} />
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
};

export default Navigator;
