import React, { useContext } from 'react';
import { Button, Dimensions, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import TouchableOpacityButton from '../../components/button/PressableButton';
import { assets_images } from '../../assets/assets_images';
import EachShippingAddress from './components/EachShippingAddress';
import { NavigationProvider } from '../../navigators/NavigationContainer';
import translate_each_word from '../../db/translate_each_word';
import { global_styles } from '../../styles/global';
const products = [
    {
        id: '1',
        quantity: 1,
        item: {
            id: '1',
            title: "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
            image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg',
            avgRating: 4.2,
            ratings: 1325,
            price: 20.98,
            oldPrice: 24.06,
        }
    },
    {
        id: '2',
        quantity: 2,
        item: {
            id: '2',
            title: "Clean Code: A Handbook of Agile Software Craftsmanship",
            image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleancode.jpg',
            avgRating: 4.8,
            ratings: 2989,
            price: 32.98,
            oldPrice: 34.06,
        }
    },
    {
        id: '3',
        quantity: 1,
        option: 'Space Grey',
        item: {
            id: '5',
            title: "Mouse Havit Mechanical Keyboard Wired 89 Keys Gaming Keyboard",
            image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse2.jpg',
            avgRating: 4.8,
            ratings: 2989,
            price: 99.98,
            oldPrice: 120.06,
        }
    },
    {
        id: '4',
        quantity: 1,
        item: {
            id: '1',
            title: "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
            image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg',
            avgRating: 4.2,
            ratings: 1325,
            price: 20.98,
            oldPrice: 24.06,
        }
    },
    {
        id: '244',
        quantity: 2,
        item: {
            id: '2',
            title: "Clean Code: A Handbook of Agile Software Craftsmanship",
            image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleancode.jpg',
            avgRating: 4.8,
            ratings: 2989,
            price: 32.98,
            oldPrice: 34.06,
        }
    },
    {
        id: '345',
        quantity: 1,
        option: 'Space Grey',
        item: {
            id: '5',
            title: "Mouse Havit Mechanical Keyboard Wired 89 Keys Gaming Keyboard",
            image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse2.jpg',
            avgRating: 4.8,
            ratings: 2989,
            price: 99.98,
            oldPrice: 120.06,
        }
    },
];

const address = [
    {
        "userID": 10000,
        "shippingAddressID": 10000,
        "addressLabel": "Home",
        "area": "FSFSDF",
        "city": "Kaderpur, Babuganj, Barisal, Barisal",
        "country": "Bangladesh",
        "phoneNumber": "01873-989651",
        "alternativePhoneNumber": "01873-989651",
        "courierServiceAddress": "SDFSDFDF",
        "email": "rakibulssc5@gamil.com",
        "defaultShippingAddress": 10000,
        "isDefaultShippingAddress": 1
    },
    {
        "userID": 10000,
        "shippingAddressID": 10001,
        "addressLabel": "Office",
        "area": "নেওয়া",
        "city": "Khagaura, Baniachong, Habiganj, Sylhet",
        "country": "Bangladesh",
        "phoneNumber": "+8801873989651",
        "alternativePhoneNumber": "8801873989651",
        "courierServiceAddress": "🤔jkk",
        "email": "rakibulssc5@gamil.com",
        "defaultShippingAddress": null,
        "isDefaultShippingAddress": 0
    }
]

export default function ShippingAddressScreen() {
    const { translate } = useContext(NavigationProvider)
    const { my_account_menu } = translate_each_word()
    const { my_carts } = translate

    return (
        <SafeAreaView style={global_styles.container}>
            <View>
                {
                    address?.map(address => {
                        return (
                            <EachShippingAddress address={address}
                                key={address?.shippingAddressID}
                            />
                        )
                    })
                }
            </View>

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    title: {
        display: 'flex',
        position: "relative",
        gap: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    page: {
        padding: 10,
    },
    subtotalText: {
        fontSize: 15,
    },
    subtotalAmount: {
        color: '#e47911',
        fontWeight: 'bold',
    },
});
