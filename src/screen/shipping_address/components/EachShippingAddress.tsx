import React, { useContext, useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import colors from '../../../utils/colors';
import { global_styles } from '../../../styles/global';
import { NavigationProvider } from '../../../navigators/NavigationContainer';
import { shippingAddressInterface } from '../../../interface/shipping_address.interface';
// import QuantitySelector from '../../../components/QuantitySelector/QuantitySelector';

export default function EachShippingAddress({ address }: { address: shippingAddressInterface }) {


    const { translate } = useContext(NavigationProvider)
    const { phone, shipping_address, courier_address, default_address } = translate

    return (
        <View style={styles.container}>
            <View style={{ gap: 4 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                    <View>
                        <Text
                            style={[global_styles.font_extrabold, global_styles.text_lg, { textDecorationLine: 'underline', width: "100%" }]}
                        >
                            {address?.addressLabel}
                        </Text>
                    </View>
                    {
                        Boolean(address?.isDefaultShippingAddress) &&
                        <View style={{ alignItems: 'baseline' }}>
                            <Text style={styles.default_shipping_address}>
                                {
                                    default_address
                                }
                            </Text>
                        </View>
                    }

                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={[global_styles.text_base, global_styles.font_medium]}>
                        {phone}:
                    </Text>
                    <Text style={global_styles.text_sm}>
                        {
                            ` ${address?.phoneNumber}, ${address?.alternativePhoneNumber}`
                        }
                    </Text>
                </View>

                <View>
                    <Text style={[global_styles.text_base, global_styles.font_medium]}>
                        {shipping_address}:
                    </Text>
                    <Text style={global_styles.text_sm}>
                        {
                            ` ${address?.area}, ${address?.city}, ${address?.country}`
                        }
                    </Text>
                </View>

                <View>
                    <Text style={[global_styles.text_base, global_styles.font_medium]}>
                        {courier_address}:
                    </Text>
                    <Text style={global_styles.text_sm}>
                        {
                            ` ${address?.courierServiceAddress}`
                        }
                    </Text>
                </View>


            </View>
        </View >

    )
}


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.border_color,
        borderRadius: 6,
        padding: 16,
        flex: 1,
        backgroundColor: '#fff',
        marginVertical: 6,
    },
    default_shipping_address: {
        ...global_styles.text_xs,
        backgroundColor: colors.info,
        color: colors.info_text,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 99999999,
    }
});
