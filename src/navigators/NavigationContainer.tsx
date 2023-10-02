import React, { PropsWithChildren, createContext, useEffect, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { translate, translateInterface } from '../translate/translate';
import { DrawerLayoutAndroid } from 'react-native';
import default_routine from '../db/default_routine.json'

export interface navigationInterface {
    navigation: {
        navigate: (value: string) => void,
        params: {},
        pathname: string,
        setParams: (props: { key: string; value?: string | number | undefined; }) => void,
    },
    translate: translateInterface,
    drawerRef: React.RefObject<DrawerLayoutAndroid>,
    routine: {}[]
}

export const NavigationProvider = createContext<navigationInterface>({
    navigation: {
        params: {},
        navigate(value) { },
        pathname: '',
        setParams: () => { },
    },
    translate: translate?.en,
    drawerRef: { current: null },
    routine: default_routine
})


export default function NavigationContainer({ children }: { children: React.ReactNode }): JSX.Element {

    const [screen, setScreen] = useState('/home');
    const [params, setAllParams] = useState<{}>({});
    const [routine, setRoutine] = useState<{}[]>([{}]);
    const drawerRef = useRef<DrawerLayoutAndroid>(null);

    class navigation {
        navigate = async (value: string) => {
            setScreen(value)
            await AsyncStorage.setItem('link', value)
        }
        setParams(props: { key: string, value?: string | number | undefined }) {
            setAllParams({
                ...params,
                [props.key]: props?.value
            })
        }
        get params() {
            return params
        }
        get pathname() {
            return screen
        }
    }


    AsyncStorage.getItem('link').then(r => {
        if (r) {
            setScreen(r)
        }
        else {
            setScreen('/home')
        }
    })

    const [language, setLanguage] = useState<translateInterface>(translate?.en)

    useEffect(() => {
        setLanguage(translate?.en)
        setRoutine(default_routine)
        return () => { }
    }, [])

    useEffect(() => {
        AsyncStorage.getItem('language').then(r => {
            if (r == 'bn') {
                setLanguage(translate?.bn)
            }
            else {
                setLanguage(translate?.en)
            }
        })
    }, [screen])

    return (
        <NavigationProvider.Provider
            value={{
                routine: routine,
                navigation: new navigation(),
                translate: language,
                drawerRef: drawerRef
            }}
        >
            {
                children
            }
        </NavigationProvider.Provider>
    );
}