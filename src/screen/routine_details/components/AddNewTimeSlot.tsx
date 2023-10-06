import React, { useState } from 'react';
import colors from '../../../utils/colors';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import TouchableOpacityButton from '../../../components/button/TouchableOpacityButton';
import { global_styles } from '../../../styles/global';
import Toast from '../../../components/toast/Toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

function AddNewTimeSlot({
    navigation,
    routine,
    setNewEntry, getAllTimeSlots
}: {
    setNewEntry: any,
    routine?: any,
    navigation: any,
    getAllTimeSlots: any
}) {
    const [fromTime, setFromTime] = useState('')
    const [details, setDetails] = useState('')
    const [toTime, setToTime] = useState('')
    const [title, setTitle] = useState('')

    const addTimeSlots = () => {
        if (!Boolean(fromTime) || !Boolean(details) || !Boolean(toTime) || !Boolean(title)) {
            Toast({ text: "Please fill all box" })
        }
        else {
            const insert = {
                from: fromTime,
                to: toTime,
                id: parseInt(routine?.time_slots?.length) + 1,
                routineID: navigation?.params?.routineID,
                details: details,
                title: title
            }

            routine.time_slots = [...routine.time_slots, insert]
            AsyncStorage.setItem('routine', JSON.stringify(routine)).then(r => {
                setNewEntry(false);
                getAllTimeSlots()
            })
        }
    }
    return (
        <View style={{ display: "flex", gap: 16 }}>

            <View>
                <Text style={[global_styles.text_base, global_styles.font_medium, { paddingBottom: 4 }]}>
                    Title
                </Text>
                <TextInput
                    onChangeText={(text) => setTitle(text)}
                    placeholder="Write a title of time slots"
                    style={styles.input}
                />
            </View>

            <View>
                <Text style={[global_styles.text_base, global_styles.font_medium, { paddingBottom: 4 }]}>
                    Details
                </Text>
                <TextInput
                    onChangeText={(text) => setDetails(text)}
                    placeholder="Write a details of time slots"
                    style={[{ height: 100, borderColor: colors.primary, borderWidth: 1, paddingHorizontal: 4, }]}
                    multiline
                // numberOfLines={4}
                // maxLength={40}
                />
            </View>
            <View style={{ display: 'flex', flexDirection: "row", gap: 4, }}>
                <View>
                    <Text style={[global_styles.text_base, global_styles.font_medium, { paddingBottom: 4 }]}>
                        From
                    </Text>
                    <TextInput
                        onChangeText={(text) => setToTime(text)}
                        placeholder="11:00 am"
                        style={styles.input}
                    />
                </View>
                <View>
                    <Text style={[global_styles.text_base, global_styles.font_medium, { paddingBottom: 4 }]}>
                        To
                    </Text>
                    <TextInput
                        onChangeText={(text) => setFromTime(text)}
                        placeholder="11:30 am"
                        style={styles.input}

                    />
                </View>
            </View>
            <View>
                <TouchableOpacityButton
                    onPress={addTimeSlots}
                    text='Add New'
                    containerStyles={{ height: 40, backgroundColor: colors.primary, borderWidth: 0 }}
                    textStyle={{ color: colors.primary_text }}
                />
            </View>
        </View>
    );
}

export default AddNewTimeSlot;


export const styles = StyleSheet.create({
    input: {
        borderColor: colors.primary,
        borderRadius: 4,
        borderWidth: 1,
        flex: 1,
        height: 48,
        padding: 8,
    },
});