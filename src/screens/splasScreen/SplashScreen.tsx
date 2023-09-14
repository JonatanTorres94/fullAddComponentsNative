import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

interface Props {
    navigation: NavigationScreenProp<any, any>
}

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const SplashScreen = ({ navigation }: Props) => {
    // Agrega cualquier lógica necesaria, como cargar datos iniciales o configuraciones
    useEffect(() => {
        // Simula una espera de 2 segundos antes de navegar a la pantalla principal
        setTimeout(() => {
            navigation.navigate('Home'); // Reemplaza 'Main' con el nombre de tu pantalla principal
        }, 1000);
    }, []);

    return (
        <View style={{flex: 1, backgroundColor:'#442B93'}}>
            <Image style={{ width: screenWidth, height: screenHeight }} source={require('../../images/splash.jpg')} resizeMode='cover' />
        </View>
    );
};


export default SplashScreen;
