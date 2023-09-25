import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../theme/colors'
import { useNavigation } from '@react-navigation/native'

export const GoBack = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ left: 10, top: 10, bottom:15 }}
        >
            <Icon name="arrow-back-outline" size={35} color={colors.fourth} />
        </TouchableOpacity>
    )
}
