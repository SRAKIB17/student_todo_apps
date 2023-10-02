import React, { PropsWithChildren, useContext, useRef, useState } from 'react';
import {
    Button,
    DrawerLayoutAndroid,
    Text,
    StyleSheet,
    View,
} from 'react-native';
import { NavigationProvider } from '../../../navigators/NavigationContainer';

type SectionProps = PropsWithChildren<{
    // drawerRef: React.RefObject<DrawerLayoutAndroid>
}>;
const DrawerMenuNavbar = ({ children }: SectionProps): JSX.Element => {
    const { drawerRef } = useContext(NavigationProvider)
    const drawer = useRef<DrawerLayoutAndroid>(null);
    const navigationView = () => (
        <View style={[styles.container, styles.navigationContainer]}>
            <Text style={styles.paragraph}>I'm in the Drawer!</Text>
            <Button
                title="Close drawer"
                onPress={() => drawer.current?.closeDrawer()}
            />
        </View>
    );

    return (
        <DrawerLayoutAndroid
            ref={drawerRef}
            drawerWidth={300}
            drawerPosition={'left'}
            renderNavigationView={navigationView}>
            {
                children
            }
        </DrawerLayoutAndroid>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // padding: 16,
    },
    navigationContainer: {
        backgroundColor: 'white',
        // backgroundColor: '#ecf0f1',
    },
    paragraph: {
        padding: 16,
        fontSize: 15,
        textAlign: 'center',
    },
});

export default DrawerMenuNavbar;