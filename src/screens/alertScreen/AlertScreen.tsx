import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../theme/colors';
import { HeaderText } from '../../components/HeaderText';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const AlertScreen = () => {

    const navigation = useNavigation()

    const showAlert = () => {
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ])
    }


    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backButton}
            >
                <Icon name="arrow-back-outline" size={30} color={colors.fourth} />
            </TouchableOpacity>
            <HeaderText title='Alerts' />
            <View style={styles.container}>
                <Text style={styles.headerText}>Alerts</Text>
                <TouchableOpacity style={styles.alertButton} onPress={showAlert}>
                    <Text style={styles.buttonText}>Alert</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.major,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButton: {
        position: 'absolute',
        top: 15,
        left: 15,
    },
    headerText: {
        fontSize: 24,
        color: colors.fourth,
        marginBottom: 20,
    },
    alertButton: {
        backgroundColor: 'blue', // Personaliza el color de fondo del botón
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 18,
        color: 'white', // Personaliza el color del texto del botón
    },
});
