import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { colors } from '../../theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { HeaderText } from '../../components/HeaderText';
import { CustomSwitch } from '../../components/CustomSwitch';

export const SwitchScreen = () => {

    const navigation = useNavigation()

    const [state, setState] = useState({
        isActive: true,
        isHungry: false
    });

    const {isActive, isHungry} = state

    const onChange = (value: boolean, field: string) => {
        setState({
            ...state,
            [field]: value
        })
    }

    return (

        <View style={{ flex: 1 }}>


            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >

                <Icon
                    name='arrow-back-outline'
                    size={50}
                    color={colors.fourth}
                    style={{ top: 30, left: 15 }}
                />


            </TouchableOpacity>

            <HeaderText title='Switch Component' />

            <View style={styles.container}>
                <Text style={styles.jsonText}> { isActive ? 'Is Active: True' : 'Is Active: False' } </Text>
                <CustomSwitch isOn={isActive} onChange={(value) => onChange(value, 'isActive')} />
               
                <Icon
                    name='shield-checkmark'
                    size={50}
                    color= { (isActive) ? colors.true : colors.alert}
                />
            
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 50,
        justifyContent: 'space-between',
        marginBottom: 500
    },
    jsonText:{
        color: colors.fourth,
        fontSize: 20
    }
});
