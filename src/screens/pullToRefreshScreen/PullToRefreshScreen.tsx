import React, { useState } from 'react'
import { View, ScrollView, RefreshControl, Text } from 'react-native'
import { HeaderText } from '../../components/HeaderText'
import { GoBack } from '../../components/GoBack'
import { colors } from '../../theme/colors'

export const PullToRefreshScreen = () => {

    const [refreshing, setRefreshing] = useState(false)
    const [data, setData] = useState<string>('')

    const onRefresh = () => {
        setRefreshing(true)

        setTimeout(() => {
            
            (data == '') ? setData('Data cargada en Refresh Control') :setData('')
            console.log('Finishing')
            
            setRefreshing(false)
            
            
        },3500)
    }


    return (

        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={ onRefresh }
                    progressViewOffset={10} 
                    progressBackgroundColor={colors.blueLe}
                    colors={['white', 'red', 'blue', 'orange']}
                />
            }


        >
            <View style={{ flex: 1 }}>

                <GoBack />
                <HeaderText title='Pull To Refresh' />

                <Text style={{color: 'black'}}> {data} </Text>

            </View>
        </ScrollView>
    )
}
