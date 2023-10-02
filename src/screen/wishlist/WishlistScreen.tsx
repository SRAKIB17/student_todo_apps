import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList,
    StatusBar,
    FlatList,
    ScrollView,
} from 'react-native';
import WishlistEachProduct from './components/WishlistEachProduct';
import { global_styles } from '../../styles/global';

const wishlist = [
    {
        "title": "আরু সেট",
        "currency": "BDT",
        "brand": "Ahaliyas Deen Square",
        "price": 3950,
        "discount": 0,
        "images": "https://ahaliyasdeensquare.com/upload/products/10059/1693991182137-921854465.webp",
        "categoryID": 10041,
        "availabilityStatus": "In Stock",
        "wishlistID": 10015,
        "userID": 10000,
        "email": "rakibulssc5@gamil.com",
        "productID": 10060,
        "createdAt": "2023-09-30T03:11:13.000Z",
        "isSharingDisable": 1,
        "wishlistSharingHistory": null,
        "priority": null
    },
    {
        "title": "যাহরাহ্ ফুল সেট",
        "currency": "BDT",
        "brand": "Ahaliyas Deen Square",
        "price": 3500,
        "discount": 5,
        "images": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "categoryID": 10089,
        "availabilityStatus": "In Stock",
        "wishlistID": 10016,
        "userID": 10000,
        "email": "rakibulssc5@gamil.com",
        "productID": 10059,
        "createdAt": "2023-09-30T03:11:14.000Z",
        "isSharingDisable": 1,
        "wishlistSharingHistory": null,
        "priority": null
    },
    {
        "title": "রেগুলার বোরকা",
        "currency": "BDT",
        "brand": "Ahaliyas Deen Square",
        "price": 3240,
        "discount": 0,
        "images": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "categoryID": 10048,
        "availabilityStatus": "In Stock",
        "wishlistID": 10017,
        "userID": 10000,
        "email": "rakibulssc5@gamil.com",
        "productID": 10062,
        "createdAt": "2023-09-30T03:11:15.000Z",
        "isSharingDisable": 1,
        "wishlistSharingHistory": null,
        "priority": null
    },
    {
        "title": "তাহসীনা fsdffffffffffffffffffffffffffffffsdfsd sfsffdsফুল সেট",
        "currency": "BDT",
        "brand": "Ahaliyas Deen Square",
        "price": 4850,
        "discount": 0,
        "images": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "categoryID": 10086,
        "availabilityStatus": "In Stock",
        "wishlistID": 10018,
        "userID": 10000,
        "email": "rakibulssc5@gamil.com",
        "productID": 10066,
        "createdAt": "2023-09-30T03:11:18.000Z",
        "isSharingDisable": 1,
        "wishlistSharingHistory": null,
        "priority": null
    },
    {
        "title": "মাসিয়াত ফুল সেট",
        "currency": "BDT",
        "brand": "Ahaliyas Deen Square",
        "price": 4800,
        "discount": 0,
        "images": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "categoryID": 10087,
        "availabilityStatus": "In Stock",
        "wishlistID": 10019,
        "userID": 10000,
        "email": "rakibulssc5@gamil.com",
        "productID": 10065,
        "createdAt": "2023-09-30T03:11:19.000Z",
        "isSharingDisable": 1,
        "wishlistSharingHistory": null,
        "priority": null
    }
]

export const WishlistScreen = () => {
    return (
        <SafeAreaView style={global_styles.container}>
            <View>
                {
                    wishlist?.map((product, index) => {
                        return (
                            <WishlistEachProduct product={product} key={product?.productID} />
                        )
                    })
                }
            </View>
        </SafeAreaView>
    )
}
