import React, { PropsWithChildren, createContext, useEffect, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { translate, translateInterface } from '../translate/translate';
import { DrawerLayoutAndroid } from 'react-native';
import routine from '../db/routine.json';

export interface RoutineDatabaseInterface {
    day?: {}[],
    time_slots?: {
        routineID?: number,
        id?: number,
        from?: string,
        to?: string,
        details?: string,
        title?: string
    }[]
}

export interface navigationInterface {
    navigation: {
        navigate: (value: string, paramsProps?: { key: string; value?: string | number | undefined; }[]) => void,
        params: {} | any,
        pathname: string,
        setParams: (props: { key: string; value?: string | number | undefined; }[]) => void,
    },
    translate: translateInterface,
    drawerRef: React.RefObject<DrawerLayoutAndroid>,
    routine: RoutineDatabaseInterface
}

export const NavigationProvider = createContext<navigationInterface>({
    navigation: {
        params: {},
        navigate(value, hasParams) { },
        pathname: '',
        setParams: () => { },
    },
    translate: translate?.en,
    drawerRef: { current: null },
    routine: routine
})

const dataArray = [{ "routineID": 1 }, { "day": "Sunday" }];



export default function NavigationContainer({ children }: { children: React.ReactNode }): JSX.Element {

    const [screen, setScreen] = useState('/home');
    const [params, setAllParams] = useState<{}>({});
    const [routineSet, setRoutine] = useState<RoutineDatabaseInterface>();
    const drawerRef = useRef<DrawerLayoutAndroid>(null);

    class navigation {
        navigate = async (value: string, paramsProps = [{ key: '', value: '' }]) => {

            if (Boolean(paramsProps?.[0]?.key) && (Boolean(paramsProps?.[0]?.value) || paramsProps?.[0]?.value == '0')) {

                const paramsObj: Array<{ [key: string]: any }> = paramsProps?.map(r => {
                    return {
                        [r?.key]: r?.value
                    }
                })

                const mergedObject = Object.assign({}, ...paramsObj);


                const p = {
                    ...params,
                    ...mergedObject
                }
                setScreen(value)
                setAllParams(p)
                await AsyncStorage.setItem('link', value)
                await AsyncStorage.setItem('params', JSON.stringify(p))
            }
            else {
                setScreen(value)
                await AsyncStorage.setItem('link', value)
                await AsyncStorage.removeItem('params')
            }
        }

        setParams = async (paramsProps = [{ key: '', value: '' }]) => {
            const paramsObj: Array<{ [key: string]: any }> = paramsProps?.map(r => {
                return {
                    [r?.key]: r?.value
                }
            })
            const mergedObject = Object.assign({}, ...paramsObj);

            const p = {
                ...params,
                ...mergedObject
            }

            setAllParams(p)
            await AsyncStorage.setItem('params', JSON.stringify(p))
        }

        get params() {
            return params
        }
        get pathname() {
            return screen
        }
    }


    const [language, setLanguage] = useState<translateInterface>(translate?.bn)



    useEffect(() => {
        setLanguage(translate?.bn)
        AsyncStorage.getItem('link').then(r => {
            if (r) {
                setScreen(r)
            }
            else {
                setScreen('/home')
            }
        })
        // *****************************************************

        AsyncStorage.getItem('params').then(r => {
            if (r) {
                setAllParams(JSON.parse(r))
            }
            else {
                setAllParams({})
            }
        })

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
        AsyncStorage.getItem('routine').then((r: any) => {
            if (r) {
                setRoutine(JSON.parse(r))
            }
            else {
                AsyncStorage.setItem('routine', JSON.stringify(routine))
                setRoutine(routine)
            }
        })
    }, [screen])

    const navigationConstructor: any = new navigation()

    return (
        <NavigationProvider.Provider
            value={{
                routine: routineSet,
                navigation: navigationConstructor,
                translate: language,
                drawerRef: drawerRef,
            }}
        >
            {
                children
            }
        </NavigationProvider.Provider>
    );
}