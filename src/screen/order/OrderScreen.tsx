import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MyEachOrder from './components/EachOrder';
import colors from '../../utils/colors';
import { global_styles } from '../../styles/global';




const orders = [
    {
        "userID": 10000,
        "email": "rakibulssc5@gamil.com",
        "createdAt": "2023-09-25T01:29:39.000Z",
        "orderID": 10014,
        "timeTrackStatusID": 0,
        "additionalComments": "",
        "isComplete": 0,
        "isCancel": 0,
        "isApproved": 0,
        "cancelReason": null,
        "trackingNumber": null,
        "ordersShippingAddressID": 10014,
        "addressLabel": "Home",
        "area": "FSFSDF",
        "city": "Kaderpur, Babuganj, Barisal, Barisal",
        "country": "Bangladesh",
        "phoneNumber": "01873-989651",
        "alternativePhoneNumber": "01873-989651",
        "courierServiceAddress": "SDFSDFDF",
        "paymentID": 10014,
        "paymentMethod": "bKash",
        "transactionID": "Gfdds554144",
        "paymentPhoneNumber": "28744458854",
        "amount": 195,
        "currency": "BDT",
        "paymentGatewayResponse": null,
        "subtotal": 135,
        "shipping": 70,
        "coupon": -10,
        "couponDetails": "",
        "status": "Order Placed",
        "statusID": 0,
        "statusMassage": "Order accepted. Waiting for confirmation.",
        "trackingTime": "2023-09-25T01:29:39.000Z"
    },
    {
        "userID": 10000,
        "email": "rakibulssc5@gamil.com",
        "createdAt": "2023-09-24T23:48:00.000Z",
        "orderID": 10013,
        "timeTrackStatusID": 0,
        "additionalComments": "",
        "isComplete": 0,
        "isCancel": 0,
        "isApproved": 0,
        "cancelReason": null,
        "trackingNumber": null,
        "ordersShippingAddressID": 10013,
        "addressLabel": "Home",
        "area": "FSFSDF",
        "city": "Kaderpur, Babuganj, Barisal, Barisal",
        "country": "Bangladesh",
        "phoneNumber": "01873-989651",
        "alternativePhoneNumber": "01873-989651",
        "courierServiceAddress": "SDFSDFDF",
        "paymentID": 10013,
        "paymentMethod": "bKash",
        "transactionID": "gsdf345fsdf",
        "paymentPhoneNumber": "53454354355",
        "amount": 11910,
        "currency": "BDT",
        "paymentGatewayResponse": null,
        "subtotal": 11850,
        "shipping": 70,
        "coupon": -10,
        "couponDetails": "",
        "status": "Order Placed",
        "statusID": 0,
        "statusMassage": "Order accepted. Waiting for confirmation.",
        "trackingTime": "2023-09-24T23:48:00.000Z"
    },
]

export default function OrderScreen() {

    return (
        <SafeAreaView style={global_styles.container}>
            <View>
                <Text>
                    Here sorting option
                </Text>
            </View>
            <View>
                {
                    orders?.map(((order) => {
                        return (
                            <MyEachOrder key={order?.orderID} order={order} />
                        )
                    }))
                }
            </View>
        </SafeAreaView>
    );
}

