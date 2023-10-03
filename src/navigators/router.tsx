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
import RoutineDetailsScreen from "../screen/routine_details/RoutineDetailsScreen";
import IncomeExpenditureScreen from "../screen/income_expenditure/IncomeExpenditureScreen";
import CurrentIncomeExpenditureScreen from "../screen/income_expenditure/CurrentIncomeExpenditureScreen";
import HistoryIncomeExpenditureScreen from "../screen/income_expenditure/HistoryIncomeExpenditureScreen";

import transactionsDefaultDB from '../db/transactions.json'

export default function Router(props: navigationInterface) {
    const { translate, navigation: { pathname, params }, database } = props
    const months: any = translate;

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
        routine,
        income_expenditure,
        current_income_expenditure,
        income_expenditure_history
    } = translate
    const week_day: any = translate
    const router = [
        // /home
        {
            title: "Home",
            component: HomeScreen,
            link: "/home",
        },

        {
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
            title: "Routine",
            navbar: <NavbarTitleBackButton
                title={routine}
                key="routine_nav"
                backward="/home"
            />,
            component: RoutineScreen,
            link: "/routine",
        },

        {
            title: "Routine",
            navbar: <NavbarTitleBackButton
                title={week_day[params?.day?.toLowerCase()]}
                key="routine_nav"
                backward="/routine"
            />,
            component: RoutineDetailsScreen,
            link: `/routine/${params?.routineID}`,
        },



        // /profile
        {
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
            title: "Cart",
            link: "/carts",
            navbar: <NavbarTitleBackButton
                title={my_carts}
                key="my_carts_nav"
                backward="/profile"
            />,
            component: CartScreen
        },

        {
            title: "Income Expenditure",
            link: "/income-expenditure",
            navbar: <NavbarTitleBackButton
                title={income_expenditure}
                key="income_expenditure_nav"
                backward="/home"
            />,
            component: IncomeExpenditureScreen
        },
        {
            title: "Income Expenditure Current",
            link: "/income-expenditure/current",
            navbar: <NavbarTitleBackButton
                title={`${current_income_expenditure} (${months[Object.values(transactionsDefaultDB?.months[`${new Date().getMonth()}`])?.[0]?.toLowerCase()]})`}
                key="income_expenditure_current_nav"
                backward="/income-expenditure"
            />,
            component: CurrentIncomeExpenditureScreen
        },
        {
            title: "Income Expenditure History",
            link: "/income-expenditure/history",
            navbar: <NavbarTitleBackButton
                title={income_expenditure_history}
                // title={`${income_expenditure_history}${params?.expensiveYear ? "(" + params?.expensiveYear + ")" : ""}`}
                key="income_expenditure_history_nav"
                backward="/income-expenditure"
            />,
            component: HistoryIncomeExpenditureScreen
        },
        {
            title: "Income Expenditure History",
            link: "/income-expenditure/history",
            navbar: <NavbarTitleBackButton
                title={income_expenditure_history}
                key="income_expenditure_history_nav"
                backward="/income-expenditure"
            />,
            component: HistoryIncomeExpenditureScreen
        },
        // /notifications
        {
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