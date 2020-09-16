import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from "react-native";
import { ListItem, Input, Button, Overlay } from 'react-native-elements';
import { database } from '../config/firebase';

// console.log(database.collecation('task'));
const list = [
    {
        title: 'Appointments',
        icon: 'av-timer'
    },
    {
        title: 'Trips',
        icon: 'flight-takeoff'
    },
];

const Home = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const courrent = 'todo';
    const table = 'task';

    useEffect(() => {
        // databases
        //     .collecation(table)
        //     .where('status', '==', courrent)
        //     .onSnapshot((query) => {

        //         const items = [];
        //         query.forEach((doc) => {
        //             items.push({ ...doc.data(), id: doc.id })
        //         });

        //         setData(items);
        //         console.log(JSON.stringify(items));
        //     })
    }, []);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    const selectFull = (val) => {
        toggleOverlay();
        navigation.navigate('Fuel', { type: val })
    };

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>
                    My Car
                </Text>
                <View style={styles.contentButtons}>
                    <View style={styles.contentButton}>
                        <Button
                            title='Novo Abstec.'
                            onPress={toggleOverlay}
                        />
                    </View>
                    <View style={styles.contentButton}>
                        <Button
                            title='Ver Consumo'
                            onPress={() => navigation.navigate('Fuel')}
                        />
                    </View>
                </View>
            </View>
            <View>
                {
                    list.map((item, i) => (
                        <ListItem key={i} bottomDivider>

                            <ListItem.Content>
                                <ListItem.Title>{item.title}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
            </View>
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                <View style={styles.contentModal}>
                    <View style={styles.contentButton}>
                        <Button
                            title='Gasolina'
                            onPress={() => selectFull(1)}
                            buttonStyle={{
                                backgroundColor: '#F2BE22'
                            }}
                        />
                    </View>
                    <View style={styles.contentButton}>
                        <Button
                            title='Etanol'
                            onPress={() => selectFull(2)}
                            buttonStyle={{
                                backgroundColor: '#7ED955'
                            }}
                        />
                    </View>
                </View>
            </Overlay>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({

    contentButton: {
        margin: 10,
        padding: 15,
    },
    contentModal: {
        width: 300,
        padding: 50,
    },
    contentButtons: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {
        justifyContent: 'center'
    },
    title: {
        alignItems: 'center',
        padding: 20
    },
    titleText: {
        fontSize: 30,
        marginBottom: 20,
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});