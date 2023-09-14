import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { Animated, PanResponder, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../theme/colors';

export const Animation102 = () => {


    const navigation = useNavigation()

    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event(
            [
                null,
                {
                    dx: pan.x, // x,y are Animated.Value
                    dy: pan.y,
                },
            ],
            { useNativeDriver: false } // Desactiva el uso del controlador nativo
        ),
        onPanResponderRelease: () => {
            Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: true }).start();
        },
    });

    return (
        <View style={{flex:1}}>
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

            <View style={styles.container}>


                <Animated.View
                    {...panResponder.panHandlers}
                    style={[
                        {
                            transform: [{ translateX: pan.x }, { translateY: pan.y }], // Usa transform para animar la posición
                        },
                        styles.purpleBox
                    ]}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    },
    purpleBox: {
        backgroundColor: '#596',
        width: 150,
        height: 150,
    },
});

