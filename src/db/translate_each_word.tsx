import React, { useContext } from 'react';
import { NavigationProvider } from '../navigators/NavigationContainer';
import { assets_images } from '../assets/assets_images';

const translate_each_word = () => {
    const { translate } = useContext(NavigationProvider)

    const {
        home, profile, cart, wishlist, account_information, my_carts, my_orders, my_wishlists, notifications, shipping_address, support_tickets, settings
        , notes, routine, income_expenditure

    } = translate

    const footerMenuButton = [
        {
            light: assets_images.home_light,
            dark: assets_images.home_dark,
            title: home,
            link: "/home",
        },
        {
            light: assets_images.wishlist_light,
            dark: assets_images.wishlist_dark,
            title: wishlist,
            link: "/wishlists"
        },
        {
            light: assets_images.cart_light,
            dark: assets_images.cart_dark,
            title: cart,
            link: "/carts",
        },
        {
            light: assets_images.profile_light,
            dark: assets_images.profile_dark,
            title: profile,
            link: "/profile",
        }
    ]

    const my_account_menu = [
        {
            title: account_information,
            link: '/account-information',
            light: assets_images.info_light,
            dark: assets_images.info_dark,

        },
        {
            title: notifications,
            link: '/notifications',
            light: assets_images.cart_light,
            dark: assets_images.cart_dark,
        },
        {
            title: my_orders,
            link: '/orders',
            light: assets_images.order_light,
            dark: assets_images.order_dark,
        },
        {
            title: my_wishlists,
            link: '/wishlists',
            light: assets_images.wishlist_light,
            dark: assets_images.wishlist_dark,
        },
        {
            title: my_carts,
            link: '/carts',
            light: assets_images.cart_light,
            dark: assets_images.cart_dark,
        },
        {
            title: shipping_address,
            link: '/shipping-address',
            light: assets_images.shipping_address_light,
            dark: assets_images.shipping_address_dark,
        },
        {
            title: support_tickets,
            link: '/account/support-tickets',
            light: assets_images.support_ticket_light,
            dark: assets_images.support_ticket_dark,
        },
        {
            title: settings,
            link: '/settings',
            light: assets_images.settings_light,
            dark: assets_images.settings_dark,
        },
    ]

    const home_menu = [
        {
            title: notes,
            link: '/notes',
            color: assets_images.notes_color,
        },
        {
            title: routine,
            link: '/routine',
            color: assets_images.calendar_color,
        },
        {
            title: income_expenditure,
            link: '/income-expenditure',
            color: assets_images.income_expenditure_3d,
        },
        {
            title: "Task Management",
            link: '/wishlists',
            color: assets_images.notes_color,
        },
    ]

    return {
        home_menu: home_menu,
        footer: footerMenuButton,
        my_account_menu: my_account_menu,
    }
};

export default translate_each_word;