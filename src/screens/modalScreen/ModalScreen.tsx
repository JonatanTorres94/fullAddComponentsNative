import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';



export const ModalScreen = () => {

  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const toggleAlert = () => {
    setIsAlertVisible(!isAlertVisible);
  };

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Icon name="arrow-back-outline" size={30} color={colors.fourth} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Alerts</Text>
      <TouchableOpacity
        style={styles.alertButton}
        onPress={toggleAlert}
      >
        <Text style={styles.buttonText}>Show Alert</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isAlertVisible}
        onRequestClose={toggleAlert}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Custom Alert</Text>
            <Text style={styles.modalMessage}>This is a custom alert.</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={toggleAlert}
            >
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

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
    color: colors.blueLe,
    marginBottom: 20,
  },
  alertButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black'
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
    color: colors.yellowLe
  },
  modalButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});

export default ModalScreen;
