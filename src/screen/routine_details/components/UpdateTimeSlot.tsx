import React, { useState } from 'react';
import colors from '../../../utils/colors';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import TouchableOpacityButton from '../../../components/button/TouchableOpacityButton';
import { global_styles } from '../../../styles/global';
import genQueryInsertSql from '../../../mysql_gen/genQueryInsertSql';
import Toast from '../../../components/toast/Toast';
import genQueryUpdateSql from '../../../mysql_gen/genQueryUpdateSql';
import AsyncStorage from '@react-native-async-storage/async-storage';

function UpdateTimeSlot({
    navigation,
    getAllTimeSlots,
    setUpdateEntry,
    updateEntry,
    routine
}: {
    getAllTimeSlots: any,
    setUpdateEntry: any,
    navigation: any,
    updateEntry: any,
    routine: any
}) {
    const [fromTime, setFromTime] = useState(updateEntry?.from)
    const [details, setDetails] = useState(updateEntry?.details)
    const [toTime, setToTime] = useState(updateEntry?.to)
    const [title, setTitle] = useState(updateEntry?.title)

    const [error, setError] = useState('')

    const addTimeSlots = async () => {
        setError('')
        if (!Boolean(fromTime) || !Boolean(details) || !Boolean(toTime) || !Boolean(title)) {
            setError("Please fill all box")
        }
        else {
            const update = {
                routineID: updateEntry?.routineID,
                id: updateEntry?.id,
                from: fromTime,
                to: toTime,
                details: details,
                title: title
            }
            const filter = routine?.time_slots?.filter((r: any) => {
                return r?.id != updateEntry?.id
            })
            routine.time_slots = [...filter, update]
            AsyncStorage.setItem('routine', JSON.stringify(routine))
            getAllTimeSlots()
            setUpdateEntry({});
        }
    }
    return (
        <View style={{ display: "flex", gap: 16, padding: 4, }}>

            {
                Boolean(error) &&
                <Text style={[global_styles.text_sm, global_styles.font_medium, { color: colors.danger }]}>
                    {error}
                </Text>
            }
            <View>
                <Text style={[global_styles.text_base, global_styles.font_medium, { paddingBottom: 4 }]}>
                    Title
                </Text>
                <TextInput
                    defaultValue={updateEntry?.title}
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
                    defaultValue={updateEntry?.details}
                    onChangeText={(text) => setDetails(text)}
                    placeholder="Write a details of time slots"
                    style={[{ height: 100, borderColor: colors.primary, borderWidth: 1, paddingHorizontal: 4, }]}
                    multiline
                />
            </View>
            <View style={{ display: 'flex', flexDirection: "row", gap: 4, }}>
                <View>
                    <Text style={[global_styles.text_base, global_styles.font_medium, { paddingBottom: 4 }]}>
                        From
                    </Text>
                    <TextInput
                        onChangeText={(text) => setFromTime(text)}
                        placeholder="From time slot"
                        style={styles.input}
                        defaultValue={updateEntry?.from}
                    />
                </View>
                <View>
                    <Text style={[global_styles.text_base, global_styles.font_medium, { paddingBottom: 4 }]}>
                        To
                    </Text>
                    <TextInput
                        onChangeText={(text) => setToTime(text)}
                        placeholder="To time slot"
                        style={styles.input}
                        defaultValue={updateEntry?.to}
                    />
                </View>
            </View>
            <View>
                <TouchableOpacityButton
                    onPress={addTimeSlots}
                    text='Update'
                    containerStyles={{ height: 40, backgroundColor: colors.primary, borderWidth: 0 }}
                    textStyle={{ color: colors.primary_text }}
                />
            </View>
        </View>
    );
}

export default UpdateTimeSlot;


export const styles = StyleSheet.create({
    input: {
        backgroundColor: colors.white,
        borderColor: colors.primary,
        borderRadius: 4,
        borderWidth: 1,
        flex: 1,
        height: 48,
        padding: 8,
    },
});