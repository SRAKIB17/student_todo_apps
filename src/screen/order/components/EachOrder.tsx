import React, { useContext } from 'react';

import { Text, StyleSheet, Image, View } from "react-native";
import PressableButton from "../../../components/button/PressableButton";
import { global_styles } from "../../../styles/global";
import colors from "../../../utils/colors";
import timeToLocalTime from "../../../hooks/timeToLocalTime";
import { NavigationProvider } from '../../../navigators/NavigationContainer';
import TouchableOpacityButton from '../../../components/button/TouchableOpacityButton';
import currencyConvert from '../../../hooks/currencyConvert';
import ordersInterface from '../../../interface/orders.interface';


const MyEachOrder = ({ order }: { order: ordersInterface }) => {

    const { translate } = useContext(NavigationProvider)

    const { details, tracking_number, total_amount } = translate
    return (
        <View style={styles.order}>
            <View style={styles.item_info}>
                {/* Product Title */}

                <View style={{ display: 'flex', flexDirection: "row", alignItems: "center", gap: 6 }}>
                    <Text style={[global_styles.text_base, global_styles.font_semibold]}>
                        {
                            `#Order-${order?.orderID}`
                        }
                    </Text>
                    <View style={{ alignItems: 'baseline' }}>
                        <Text style={styles.payment_method}>
                            {
                                order?.paymentMethod
                            }
                        </Text>
                    </View>
                </View>
                {/* _____________________Product price stock quantity_____________________ */}
                <View>
                    <View>
                        <Text style={global_styles.text_xs}>
                            {
                                timeToLocalTime(order?.createdAt)
                            }
                        </Text>
                    </View>

                    {/* <View>
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
                    </View> */}
                </View>
                {/* ___________ Product price stock quantity _____________*/}
            </View>


            <View>

                <View style={{ paddingBottom: 3 }}>
                    <Text style={[global_styles.font_medium, { textDecorationLine: "underline" }]}>
                        {order?.addressLabel}
                    </Text>
                    <Text style={global_styles.font_light}>
                        {
                            `${order?.area}, ${order?.city}`
                        }
                    </Text>
                </View>

                <View>
                    <Text style={global_styles.font_medium}>
                        {tracking_number}: {order?.trackingNumber}
                    </Text>
                    <Text style={global_styles.font_medium}>
                        {
                            `${total_amount}: ${currencyConvert(order?.currency)}${order?.amount}`
                        }
                    </Text>
                </View>

                <View style={{ paddingBottom: 10 }}>
                    <Text>
                        {
                            order?.statusMassage
                        }
                    </Text>
                </View>
                <View style={styles.details_parent}>
                    <View>
                        <TouchableOpacityButton
                            textStyle={styles.details_button_text}
                            onPress={() => { }} text={details}
                            containerStyles={styles.detail_button}
                        />
                    </View>
                    <View>
                        <Text style={{ color: colors.green }}>
                            {
                                order?.status
                            }
                        </Text>
                    </View>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    order: {
        backgroundColor: colors.white,
        padding: 16,
        borderColor: colors.border_color,
        borderWidth: 0.5,
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        gap: 8,
        marginVertical: 6,
        borderRadius: 6,
    },
    item_info: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2
    },
    product_image: {
        width: 80,
        borderRadius: 6,
        height: 80,
        objectFit: 'fill'
    },
    details_parent: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        width: '100%'
    },
    detail_button: {
        borderWidth: 1,
        backgroundColor: colors.transparent,
        paddingHorizontal: 16,
        paddingVertical: 2,
        borderRadius: 99999999,
    },
    details_button_text: {
        color: colors.black,
        ...global_styles.text_sm
    },
    payment_method: {
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


export default MyEachOrder;
