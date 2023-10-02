import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { colors } from '../../theme/colors';
import { FlatListMenuItem } from '../../components/FlatListMenuItem';
import { menuItems } from '../../data/menuItems'
import { HeaderText } from '../../components/HeaderText';





export const HomeScreen = () => {



    const itemSeparator = () => {
        return (
            <View
                style={{
                    borderBottomWidth: 1,
                    backgroundColor: colors.tertiary,
                    opacity: 0.4,
                    margin: 15
                }}
            />
        )
    }



    return (
        <View style={{ flex: 1}}>



            <FlatList
                data={menuItems}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={() => <HeaderText title='Opciones de Menú' />}
                ItemSeparatorComponent={itemSeparator}
            />

        </View>
    )
}

