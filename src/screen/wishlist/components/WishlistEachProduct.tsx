import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import colors from '../../../utils/colors';
import { global_styles } from '../../../styles/global';
import currencyConvert from '../../../hooks/currencyConvert';
import decimalPoint from '../../../hooks/decimalPoint';

import { assets_images } from '../../../assets/assets_images';
import { eachProductInterface } from '../../../interface/each_product.interface';
import TouchableOpacityButton from '../../../components/button/TouchableOpacityButton';

export default function WishlistEachProduct(props: { product: eachProductInterface }) {
    const { title, images, availabilityStatus, price, currency, discount } = props?.product
    const product_image = images?.split(',')?.[0]?.trim();

    return (
        <View style={styles.item}>
            <View>
                <Image source={{ uri: product_image, cache: 'force-cache', }} style={styles.product_image} />
            </View>
            <View style={styles.item_info}>
                {/* Product Title */}
                <Text style={[global_styles.text_sm, global_styles.font_medium]}>
                    {
                        title?.slice(0, 30)
                    }
                    {
                        title?.length >= 30 && "\n"
                    }
                    {
                        title?.slice(30, 60)
                    }
                    {
                        title?.length >= 60 && " . . ."
                    }
                </Text>

                {/* _____________________Product price stock quantity_____________________ */}
                <View>
                    <View style={{ alignItems: 'baseline' }}>
                        <Text style={styles.stock}>
                            {
                                availabilityStatus
                            }
                        </Text>
                    </View>

                    <View>
                        <View style={styles.price}>
                            <Text>
                                {
                                    currencyConvert(currency)
                                }
                                {
                                    Boolean(discount) ?
                                        decimalPoint(price - ((price * discount) / 100))
                                        :
                                        decimalPoint(price)
                                }
                            </Text>
                            {
                                Boolean(discount) &&
                                <>

                                    <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>
                                        {
                                            currencyConvert(currency)
                                        }
                                        {
                                            decimalPoint(price)
                                        }
                                    </Text>
                                    <Text>
                                        -
                                    </Text>
                                    {
                                        Boolean(discount) &&
                                        <Text style={global_styles.font_semibold}>
                                            %
                                            {
                                                discount
                                            }
                                        </Text>
                                    }
                                </>
                            }

                        </View>
                    </View>
                </View>
                {/* ___________ Product price stock quantity _____________*/}

                <View style={{ display: 'flex', flexDirection: 'row', alignItems: "center", gap: 4, paddingTop: 4, flex: 1 }}>
                    <TouchableOpacityButton
                        onPress={() => { }}
                        image={assets_images.arrow_right_light}
                        containerStyles={{
                            backgroundColor: colors.primary,
                            width: 32,
                            height: 32,
                            borderWidth: 0,
                        }}
                    />
                    <TouchableOpacityButton
                        onPress={() => { }}
                        image={assets_images.arrow_right_light}
                        containerStyles={{
                            backgroundColor: colors.primary,
                            width: 32,
                            height: 32,
                            borderWidth: 0,
                        }}
                    />
                    <TouchableOpacityButton
                        onPress={() => { }}
                        image={assets_images.arrow_right_light}
                        containerStyles={{
                            backgroundColor: colors.primary,
                            width: 32,
                            height: 32,
                            borderWidth: 0,
                        }}
                    />
                </View>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: colors.white,
        padding: 10,
        borderColor: colors.border_color,
        borderWidth: 0.5,
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        marginVertical: 6,
        borderRadius: 6,
    },
    item_info: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5
    },
    product_image: {
        width: 100,
        borderRadius: 6,
        flex: 1,
        objectFit: 'contain'
    },

    stock: {
        ...global_styles.text_xs,
        backgroundColor: colors.info,
        color: colors.info_text,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 99999999,
    },
    price: {
        display: "flex",
        flexDirection: "row",
        gap: 4
    },
});

