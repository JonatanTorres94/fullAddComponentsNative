import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MenuItem } from '../interfaces/interfaces';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem: { name, icon, component } }: Props) => {

    const { left } = useSafeAreaInsets()
    const navigation = useNavigation();


    return (

        <TouchableOpacity 
            activeOpacity={0.7}
            onPress={() => navigation.navigate(component as never)}
        >


            <View style={{ ...styles.container, marginLeft: left + 15 }}>

                <Icon
                    name={icon}
                    color={colors.fourth}
                    size={25}
                />

                <Text style={styles.text}>
                    {name}
                </Text>

                <View style={{ flex: 1 }} />
                <Icon
                    name='arrow-redo-outline'
                    color={colors.fourth}
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
        color: colors.tertiary,
        marginLeft: 8,
    }
});