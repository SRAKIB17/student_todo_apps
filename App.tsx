import React, { createContext, useRef } from 'react';
import { Platform, StatusBar, StyleSheet } from 'react-native';

import DrawerMenuNavbar from './src/components/shared/Navbar/DrawerMenuNavbar';
import NavigationContainer from './src/navigators/NavigationContainer';
import Navigator from './src/navigators/Navigator';
import AuthenticationCheckProvider from './src/context/Authentication/AuthenticationCheckProvider';
import colors from './src/utils/colors';



const ShopProvider = createContext({})

function App(): JSX.Element {

  return (
    <AuthenticationCheckProvider>
      <NavigationContainer>
        <DrawerMenuNavbar>
          <ShopProvider.Provider value={{}}>
            <StatusBar
              animated={true}
              barStyle='light-content'
              backgroundColor={colors.primary}
              showHideTransition={'slide'}
              hidden={false}
            />
            <Navigator />

          </ShopProvider.Provider>
        </DrawerMenuNavbar>
      </NavigationContainer>
    </AuthenticationCheckProvider>
  );
}

export const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
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
});

export default App;
