import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { global_styles } from '../../styles/global';
import { NavigationProvider } from '../../navigators/NavigationContainer';
import colors from '../../utils/colors';

const user_info = {
    name: "MD Rakibul Islam",
    email: 'reakibulssc5@gmail.com',
    profile: require('../../assets/images/male_avatar.png'),
    balance: 0,
    birthday: "2023-08-19",
    country: "Bangladesh",
    defaultShippingAddress: 10000,
    gender: "Male",
    isBlock: 0,
    lastLogin: "2023-09-30T09:23:57.000Z",
    phone: "+8801873989651",
    registered: "2023-08-11T16:57:10.000Z",
    rewardCoins: 2100,
    userID: 10000,
    userType: 0
}

export default function AccountInformation() {

    const { translate, drawerRef } = useContext(NavigationProvider);

    const {
        name,
        email,
        profile,
        balance,
        birthday,
        country,
        default_shipping_address,
        gender,
        is_block,
        last_login,
        phone,
        registered,
        reward_coins,
        user_id,
        user_type,
    } = translate


    return (
        <SafeAreaView style={global_styles.container}>
            <View style={styles.table}>
                <View style={styles.row}>
                    <Text style={styles.title}>
                        {
                            name
                        }
                    </Text>
                    <Text style={styles.title}>
                        :
                    </Text>
                    <Text style={styles.title}>
                        {
                            user_info.name
                        }
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.title}>
                        {
                            email
                        }
                    </Text>
                    <Text>
                        :
                    </Text>
                    <Text style={styles.info}>
                        {
                            " user_info?.emailfsdfsdddddddd"
                        }
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    table: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: colors.border_color,
    },
    title: {
        flex: 1,
        padding: 10,
        textAlign: 'left',
    },
    info: {
        padding: 10,
        textAlign: 'left',
    },
});