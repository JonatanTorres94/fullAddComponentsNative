import React, { useEffect } from 'react'
import { Text, View, StyleSheet, Animated, Button, TouchableOpacity, Easing } from 'react-native';
import { useRef } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { useAnimation } from '../../hooks/useAnimation';

export const Animation101 = () => {

    const navigation = useNavigation()

    const {fadeIn,fadeOut,opacity,height} = useAnimation()


    useEffect(() => {
        fadeIn()
    }, [])



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

            <View style={styles.container}>


                <Animated.View style={{
                    ...styles.purpleBox,
                    opacity: opacity,
                    transform: [{
                        translateY: height
                    }]
                }} />

            </View>
            <View style={{ flexDirection: 'row',alignSelf:'center' }}>

                <TouchableOpacity
                    style={styles.button}
                    onPress={fadeIn}
                >
                    <View style={styles.iconContainer}>
                        <Icon
                            name='color-fill-outline'
                            size={32}
                            color={colors.tertiary}
                        />
                    </View>
                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.button}
                    onPress={fadeOut}
                >
                    <View style={styles.iconContainer}>
                        <Icon
                            name='color-wand-outline'
                            size={32}
                            color={colors.tertiary}
                        />
                    </View>
                </TouchableOpacity>


            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    purpleBox: {
        backgroundColor: '#5856d6',
        borderRadius: 1000,
        width: 250,
        height: 250,
        margin: 35
    },
    button: {
        backgroundColor: colors.secondary, // Color de fondo transparente
        borderWidth: 2, // Ancho del borde
        borderColor: 'gray', // Color del borde
        borderRadius: 10, // Radio de borde para esquinas redondeadas
        padding: 10, // Espaciado interno del botón
        alignItems: 'center', // Centrar elementos horizontalmente
        justifyContent: 'center', // Centrar elementos verticalmente
        marginBottom: 40,
        marginHorizontal: 50
    },
    iconContainer: {
        backgroundColor: 'transparent', // Puedes cambiar el color de fondo si deseas
    },
})