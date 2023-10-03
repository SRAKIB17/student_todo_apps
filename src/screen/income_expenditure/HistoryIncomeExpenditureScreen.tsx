import React, { useContext, useRef, useEffect, useState } from 'react';
import { Animated, FlatList, Image, ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationProvider, navigationInterface } from '../../navigators/NavigationContainer';
import colors from '../../utils/colors';
import { assets_images } from '../../assets/assets_images';
import { global_styles } from '../../styles/global';
import translate_each_word from '../../db/translate_each_word';
import { transactionsDBType } from './CurrentIncomeExpenditureScreen';
import transactionsDefaultDB from '../../db/transactions.json'
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';


export default function HistoryIncomeExpenditureScreen(props: navigationInterface) {
    const { routine, navigation, translate } = props
    const { current_income_expenditure, income_expenditure_history } = translate

    const [transactionsDB, setTransactionsDB] = useState<transactionsDBType[]>(transactionsDefaultDB.transactions)

    useEffect(() => {
        AsyncStorage.getItem('transactions').then(r => {
            if (r) {
                setTransactionsDB(JSON.parse(r))
            }
            {
                AsyncStorage.setItem('transactions', JSON.stringify(transactionsDefaultDB.transactions))
            }
        })
    }, [])

    const menu = [
        {
            title: current_income_expenditure,
            link: '/income-expenditure/current',
            color: assets_images.income_expenditure_3d,
        },
        {
            title: income_expenditure_history,
            link: '/income-expenditure/history',
            color: assets_images.income_expenditure_3d,
        },
    ]

    const distinct_year = [...new Set(transactionsDB?.map(r => {
        return new Date(r?.datetime).getFullYear()
    }))]

    const [selectYear, setSelectYear] = useState<number>()
    const [selectMonth, setSelectMonth] = useState<any[]>([])

    const months: any = translate;

    useEffect(() => {
        if (selectYear) {

            const x = transactionsDB?.filter(r => {
                return new Date(r?.datetime).getFullYear() == selectYear
            }).sort(function (a, b) {
                const a_date = new Date(a?.datetime).getDate()
                const b_date = new Date(b?.datetime).getDate()
                return b_date - a_date
            })
            console.log(x)

            setSelectMonth([
                ... new Set(transactionsDB?.filter(r => {
                    return new Date(r?.datetime).getFullYear() == selectYear
                }).map(r => {
                    return months[Object.values(transactionsDefaultDB?.months[`${new Date(r?.datetime).getMonth()}`])?.[0]?.toLowerCase()]
                }))
            ])
        }
    }, [selectYear])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {
                Boolean(selectYear) || Boolean(selectMonth.length) ||
                <View style={global_styles.container}>
                    {
                        distinct_year?.map((r: any, index) => {
                            // const check = pathname === r.link;
                            return (
                                <View key={index}>
                                    <Pressable onPress={() => {
                                        navigation.setParams([{ key: 'expensiveYear', value: r }])
                                        setSelectYear(r)
                                    }}>
                                        <View style={styles.button}>
                                            <View style={styles.button_title_image}>
                                                <View>
                                                    <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                                                        <ImageBackground
                                                            source={assets_images.blank_date_3d}
                                                            style={{ width: 48, height: 54 }}
                                                        >
                                                            <Text style={[global_styles.text_sm, global_styles.font_medium, {
                                                                textAlign: 'center',
                                                                paddingTop: 10,
                                                                color: colors.white
                                                            }]}>
                                                                {r}
                                                            </Text>
                                                        </ImageBackground>
                                                    </View>

                                                </View>
                                                <View>
                                                    <Text style={[global_styles.text_lg, global_styles.font_medium, { textTransform: "capitalize" }]}>
                                                        {
                                                            r
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
            }

            {
                Boolean(selectMonth?.length) &&
                <View style={global_styles.container}>
                    {
                        selectMonth?.map((r: any, index) => {
                            // const check = pathname === r.link;
                            return (
                                <View key={index}>
                                    <Pressable onPress={() => {
                                        // navigation.navigate(`/income-expenditure/history/${r}`, [{ key: 'history_year', value: r }])
                                        navigation.setParams([{ key: 'expensiveYear', value: selectYear }])
                                    }}>
                                        <View style={styles.button}>
                                            <View style={styles.button_title_image}>
                                                <View>
                                                    <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                                                        <ImageBackground
                                                            source={assets_images.blank_date_3d}
                                                            style={{ width: 48, height: 54 }}
                                                        >
                                                            <Text style={[global_styles.text_sm, global_styles.font_medium, {
                                                                textAlign: 'center',
                                                                paddingTop: 10,
                                                                color: colors.white
                                                            }]}>
                                                                {index + 1}
                                                            </Text>
                                                        </ImageBackground>
                                                    </View>

                                                </View>
                                                <View>
                                                    <Text style={[global_styles.text_lg, global_styles.font_medium, { textTransform: "capitalize" }]}>
                                                        {
                                                            r
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
            }

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