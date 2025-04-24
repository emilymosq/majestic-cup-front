import * as React from 'react';
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';
import {StyleSheet} from "react-native";
import {AppColors} from "../theme/AppTheme";

const CharacterModal = () => {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    return (
        <PaperProvider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} style={styles.containerStyle}>
                    <Text style={styles.modalText}>Aqui iria la imagen del personaje seleccionado.</Text>
                    <Text style={styles.modalText}>Para cerrar el modal solo haz click fuera de este.</Text>
                </Modal>
            </Portal>
            <Button style={{marginTop: 30}} onPress={showModal}>
                Show Modal
            </Button>
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: AppColors.backgroundSecondary,
        padding: 20,
    },
    modalText: {
        color: AppColors.color,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default CharacterModal;
