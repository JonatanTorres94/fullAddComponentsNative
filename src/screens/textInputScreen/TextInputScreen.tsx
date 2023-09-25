import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View, KeyboardAvoidingView, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../theme/colors'
import { HeaderText } from '../../components/HeaderText'
import { TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'





export const TextInputScreen = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: ''
    })



    const onChange = (value: string, field: string) => {
        setForm({
            ...form,
            [field]: value
        })
    }

    const navigation = useNavigation()
    return (



        <View style={{ flex: 1 }}>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"} >


                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ left: 10, top: 10 }}
                >
                    <Icon name="arrow-back-outline" size={35} color={colors.fourth} />
                </TouchableOpacity>


                <HeaderText title='Text Inputs' />

                <ScrollView>

                    <TextInput
                        style={styles.inputStyle}
                        placeholder='Ingrese su nombre'
                        placeholderTextColor='rgba(0,0,0,0.4)'
                        autoCapitalize='words'
                        onChangeText={(value) => onChange(value, 'name')}
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder='Ingrese su Email'
                        placeholderTextColor='rgba(0,0,0,0.4)'
                        autoCorrect={false}
                        onChangeText={(value) => onChange(value, 'email')}
                        keyboardType="email-address"
                    />
                    
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(value) => onChange(value, 'phone')}
                        keyboardType="numeric"
                        placeholder='Ingrese su Numero'
                        placeholderTextColor='rgba(0,0,0,0.4)'
                    />


                    <HeaderText title={JSON.stringify(form, null, 3)} />
                </ScrollView>
            </KeyboardAvoidingView>

        </View>

    )
}

const styles = StyleSheet.create({
    inputStyle: {
        margin: 20,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.4)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        color: colors.tertiary

    }
});
