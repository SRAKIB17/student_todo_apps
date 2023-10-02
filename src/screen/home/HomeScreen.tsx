import React, { useContext, useRef, useEffect } from 'react';
import { Animated, FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Banner from './components/banner/Banner';
import { categories } from './components/Categories';
import CategorySection from './components/CategorySection';
import TextInputExample from '../../components/input/InputSearch';
import ProfileScreen from '../profile/ProfileScreen';
import { NavigationProvider, navigationInterface } from '../../navigators/NavigationContainer';
import colors from '../../utils/colors';
import { assets_images } from '../../assets/assets_images';
import { global_styles } from '../../styles/global';
import translate_each_word from '../../db/translate_each_word';


export default function HomeScreen(props: navigationInterface) {
    const { routine, navigation } = props
    const { home_menu } = translate_each_word()
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={global_styles.container}>
                {
                    home_menu?.map((r: any, index) => {
                        // const check = pathname === r.link;
                        return (
                            <View key={index}>
                                <Pressable onPress={() => navigation.navigate(r?.link)}   >
                                    <View style={styles.button}>
                                        <View style={styles.button_title_image}>
                                            <View>
                                                <Image
                                                    source={r?.color}
                                                    style={{
                                                        height: 20, width: 20, objectFit: 'contain',
                                                    }}
                                                />
                                            </View>
                                            <View>
                                                <Text style={[global_styles.text_lg, { textTransform: "capitalize" }]}>
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
            </View>

        </SafeAreaView>
    );
}

export const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
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