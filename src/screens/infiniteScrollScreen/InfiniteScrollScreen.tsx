import React, { useState } from 'react'
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { HeaderText } from '../../components/HeaderText'
import { GoBack } from '../../components/GoBack'

export const InfiniteScrollScreen = () => {


    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5])

    const loadMore = () => {
        const newArray: number[] = [];
        for (let i = 0; i < 5; i++) {
            newArray[i] = numbers.length + i;
        }

        setTimeout(() => {
            setNumbers([...numbers, ...newArray])
        }, 1000)

    }

    const renderItem = (item: number) => {
        return (
            <Image
                source={{ uri: `https://picsum.photos/id/${item}/500/400` }}
                style={{ width: '100%', height: 400 }}
            />
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <View style={{ flex: 1 }}>
                <FlatList
                    data={numbers}
                    keyExtractor={(item) => item.toString()}
                    renderItem={({ item }) => renderItem(item)}
                    ListHeaderComponent={
                        <View>
                            <GoBack />
                            <HeaderText title='InfiniteScroll' />

                        </View>

                    }
                    onEndReached={loadMore}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={() => (
                        <View style={{
                            height: 100,
                            width: '100%',
                            marginBottom: 20,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <ActivityIndicator size={25} color={'#0A267C'} />
                        </View>

                    )}
                />
            </View>
        </View>
    )
}
