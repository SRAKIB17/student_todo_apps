import { useContext } from "react";
import CartScreen from "../screen/cart/CartScreen";
import HomeScreen from "../screen/home/HomeScreen";
import { NavigationProvider, navigationInterface } from "./NavigationContainer";
import ProfileScreen from "../screen/profile/ProfileScreen";
import { assets_images } from "../assets/assets_images";
import NavbarTitleBackButton from "../components/shared/Navbar/NavbarTitleBackButton";
import OrderScreen from "../screen/order/OrderScreen";
import SettingsScreen from "../screen/settings/SettingsScreen";
import { WishlistScreen } from "../screen/wishlist/WishlistScreen";
import NotificationsScreen from "../screen/notifications/NotificationsScreen";
import AccountInformation from "../screen/account_information/AccountInformation";
import ShippingAddressScreen from "../screen/shipping_address/ShippingAddressScreen";
import RoutineScreen from "../screen/routine/RoutineScreen";

export default function Router(props: navigationInterface) {
    const { translate, navigation: { pathname, params } } = props

    console.log(params)

    const {
        my_carts,
        my_profile,
        my_wishlists,
        settings,
        account_information,
        my_orders,
        shipping_address,
        notifications,


        notes,
        routine
    } = translate


    const router = [
        // /home
        {
            light: assets_images.home_light,
            dark: assets_images.home_dark,
            title: "Home",
            component: HomeScreen,
            link: "/home",
        },

        {
            light: assets_images.home_light,
            dark: assets_images.home_dark,
            title: "Notes",
            navbar: <NavbarTitleBackButton
                title={notes}
                key="notes_nav"
                backward="/home"
            />,
            component: RoutineScreen,
            link: "/notes",
        },

        {
            light: assets_images.home_light,
            dark: assets_images.home_dark,
            title: "Routine",
            navbar: <NavbarTitleBackButton
                title={routine}
                key="routine_nav"
                backward="/home"
            />,
            component: RoutineScreen,
            link: "/routine",
        },



        // /profile
        {
            light: assets_images.profile_light,
            dark: assets_images.profile_dark,
            title: "Profile",
            link: "/profile",
            navbar: <NavbarTitleBackButton
                title={my_profile}
                key="profile_nav"
                backward="/profile"
            />,
            component: ProfileScreen
        },
        // /account-information
        {
            light: assets_images.profile_light,
            dark: assets_images.profile_dark,
            title: "Account information",
            link: "/account-information",
            navbar: <NavbarTitleBackButton
                title={account_information}
                key="profile_information_nav"
                backward="/profile"
            />,
            component: AccountInformation
        },

        // /wishlists
        {
            light: assets_images.wishlist_light,
            dark: assets_images.wishlist_dark,
            title: "Favorite",
            link: "/wishlists",
            navbar: <NavbarTitleBackButton
                title={my_wishlists}
                key="wishlist_nav"
                backward="/profile"
            />,
            component: WishlistScreen,
        },

        // /wishlists
        {
            light: assets_images.shipping_address_light,
            dark: assets_images.shipping_address_dark,
            title: "Shipping Address",
            link: "/shipping-address",
            navbar: <NavbarTitleBackButton
                title={shipping_address}
                key="shipping_address_nav"
                backward="/profile"
            />,
            component: ShippingAddressScreen,
        },

        // /carts
        {
            light: assets_images.cart_light,
            dark: assets_images.cart_dark,
            title: "Cart",
            link: "/carts",
            navbar: <NavbarTitleBackButton
                title={my_carts}
                key="my_carts_nav"
                backward="/profile"
            />,
            component: CartScreen
        },

        // /orders
        {
            light: assets_images.order_light,
            dark: assets_images.order_dark,
            title: "Orders",
            link: "/orders",
            navbar: <NavbarTitleBackButton
                title={my_orders}
                key="my_orders_nav"
                backward="/profile"
            />,
            component: OrderScreen
        },
        // /notifications
        {
            light: assets_images.profile_light,
            dark: assets_images.profile_dark,
            title: "Notifications",
            link: "/notifications",
            navbar: <NavbarTitleBackButton
                title={notifications}
                key="notifications_nav"
                backward="/profile"
            />,
            component: NotificationsScreen
        },

        // /settings
        {
            light: assets_images.profile_light,
            dark: assets_images.profile_dark,
            title: "Settings",
            link: "/settings",
            navbar: <NavbarTitleBackButton
                title={settings}
                key="settings_nav"
                backward="/profile"
            />,
            component: SettingsScreen
        },




    ];

    return router.find(component => component.link == pathname)
}