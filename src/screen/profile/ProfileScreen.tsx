import React, { useContext } from 'react';
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationProvider, navigationInterface } from '../../navigators/NavigationContainer';
import translate_each_word from '../../db/translate_each_word';
import { global_styles } from '../../styles/global';
import { assets_images } from '../../assets/assets_images';
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


export default function ProfileScreen({ navigation, drawerRef, translate }: navigationInterface) {
    const { my_account_menu } = translate_each_word()
    const { log_out } = translate
    return (
        <View style={global_styles.container}>

            <View style={{ display: 'flex', gap: 16, paddingBottom: 40 }}>
                <View style={{ display: 'flex', flexDirection: "row", alignItems: 'center', gap: 16 }}>
                    <View>
                        <Image source={user_info.profile} style={{ width: 64, height: 64 }} />
                    </View>

                    <View>
                        <Text style={[global_styles.text_xl, global_styles.font_medium]}>
                            {
                                user_info?.name
                            }
                        </Text>
                        <Text style={[global_styles.text_base, global_styles.font_normal]}>
                            {
                                user_info?.email
                            }
                        </Text>
                    </View>

                </View>
            </View>

            <View style={{ borderTopColor: colors.border_color, borderTopWidth: 0.5 }}>
                {
                    my_account_menu?.map((r: any, index) => {
                        // const check = pathname === r.link;
                        return (
                            <View key={index}>
                                <Pressable onPress={() => navigation.navigate(r?.link)}   >
                                    <View style={styles.button}>
                                        <View style={styles.button_title_image}>
                                            <View>
                                                <Image
                                                    source={r?.dark}
                                                    style={{
                                                        height: 20, width: 20, objectFit: 'contain',
                                                    }}
                                                />
                                            </View>
                                            <View>
                                                <Text style={global_styles.text_lg}>
                                                    {
                                                        r?.title
                                                    }
                                                </Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Image
                                                source={assets_images.arrow_right_grey}
                                                style={{
                                                    height: 16, objectFit: 'contain',
                                                }}
                                            />
                                        </View>
                                    </View>
                                </Pressable>
                            </View>
                        )
                    })
                }
                <View>
                    <Pressable
                        onPress={() => navigation.navigate("r?.link")}
                    >
                        <View style={styles.button}>
                            <View style={styles.button_title_image}>
                                <View>
                                    <Image
                                        source={assets_images.log_out_dark}
                                        style={{
                                            height: 20, width: 20, objectFit: 'contain',
                                        }}
                                    />
                                </View>
                                <View>
                                    <Text style={global_styles.text_lg}>
                                        {
                                            log_out
                                        }
                                    </Text>
                                </View>
                            </View>

                            <View>
                                <Image
                                    source={assets_images.arrow_right_grey}
                                    style={{
                                        height: 16, objectFit: 'contain',
                                    }}
                                />
                            </View>
                        </View>
                    </Pressable>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 56,
        paddingVertical: 16,
        paddingHorizontal: 4,
        width: '100%',
        borderColor: colors.border_color,
        borderBottomWidth: 0.5,
    },
    button_title_image: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    }
});