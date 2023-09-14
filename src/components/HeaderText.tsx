import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme'

interface Props{
    title: string
}

export const HeaderText = ({title}:Props) => {


    const { top, bottom } = useSafeAreaInsets()

    return (
        <View style={{ marginTop: top + 30, marginBottom: bottom + 30, alignSelf: 'center' }}>
            <Text style={styles.title}> {title} </Text>
        </View>
    )
}
