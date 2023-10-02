import React, { useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
// import QuantitySelector from '../../../components/QuantitySelector/QuantitySelector';

interface CartProductItemProps {
    cartItem: {
        id: string,
        quantity: number,
        option?: string,
        item: {
            id: string,
            title: string,
            image: string,
            avgRating: number,
            ratings: number,
            price: number,
            oldPrice?: number,
        },
    }
}

export default function CartProductItem({ cartItem }: CartProductItemProps) {
    const { quantity: quantityProp, item } = cartItem;
    const [quantity, setQuantity] = useState(quantityProp);

    return (
        <View style={styles.root}>
            <View style={styles.row}>
                <Image style={styles.image} source={{ uri: item.image }} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
                    {/* Ratings */}
                    <View style={styles.ratingsContainer}>
                        {/* {[0, 0, 0, 0, 0].map((el, i) => (
                            <FontAwesome
                                key={`${item.id}-${i}`}
                                style={styles.star}
                                name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                                size={18}
                                color={"#e47911"} />
                        ))} */}
                        <Text>{item.ratings}</Text>
                    </View>
                    <Text style={styles.price}>
                        from ₹{item.price}
                        {item.oldPrice && <Text style={styles.oldPrice}>₹{item.oldPrice}</Text>}
                    </Text>
                </View>
            </View>
            {/* quantity selector */}
            <View style={styles.quantityContainer}>
                {/* <QuantitySelector quantity={quantity} setQuantity={setQuantity} /> */}
            </View>

        </View>

    )
}


const styles = StyleSheet.create({
    root: {
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginVertical: 5,
    },
    row: {
        flexDirection: 'row',
    },
    image: {
        flex: 2,
        height: 150,
        resizeMode: 'contain',
    },
    rightContainer: {
        padding: 10,
        flex: 3,
    },
    title: {
        fontSize: 18,
    },
    ratingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    star: {
        margin: 2,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    oldPrice: {
        fontSize: 15,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
    },
    quantityContainer: {
        margin: 5,
    }
});
