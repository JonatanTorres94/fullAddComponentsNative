import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MenuItem } from '../interfaces/interfaces';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';


interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem: { name, icon, component } }: Props) => {

    const { left } = useSafeAreaInsets()
    const navigation = useNavigation();
    const {theme: {colors}} = useContext( ThemeContext)


    return (

        <TouchableOpacity 
            activeOpacity={0.7}
            onPress={() => navigation.navigate(component as never)}
        >


            <View style={{ ...styles.container, marginLeft: left + 15 }}>

                <Icon
                    name={icon}
                    color={colors.primary}
                    size={25}
                />

                <Text style={{...styles.text, color:colors.text}}>
                    {name}
                </Text>

                <View style={{ flex: 1 }} />
                <Icon
                    name='arrow-redo-outline'
                    color={colors.primary}
                    size={25}
                    style={{ right: 18 }}
                />

            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    text: {
        fontSize: 25,
        marginLeft: 8,
    }
});