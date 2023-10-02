import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { HeaderText } from '../../components/HeaderText'
import { GoBack } from '../../components/GoBack'
import { colors } from '../../theme/colors'
import { ThemeContext } from '../../context/themeContext/ThemeContext'

export const ConfigScreen = () => {

    const { theme, setDarkTheme, setLightTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        if (theme.currentTheme === 'light') {
          setDarkTheme();
        } else {
          setLightTheme();
        }
      };


    return (
        <View>
            <GoBack />
            <HeaderText title='Configurations' />

            <TouchableOpacity
                onPress={toggleTheme}
                style={{
                    backgroundColor: colors.blueLe,
                    width: 130,
                    height: 30,
                    borderRadius: 30,
                    marginHorizontal: 20,
                    alignItems:'center'
                }}
                activeOpacity={0.7}
                

            >
                <Text style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 20
                }}>{theme.currentTheme === 'light' ? 'Dark' : 'Light'} Theme</Text>
            </TouchableOpacity>
        </View>
    )
}
