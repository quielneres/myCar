import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from "react-native";

import { ListItem, Input, Button } from 'react-native-elements';

const Fuel = ({ route, navigation }) => {
    const [type, setType] = useState(null);
    const [title, setTitle] = useState('');
    const [litros, serLitros] = useState(0);
    const [form, setForm] = useState(
        {
            valorAtual: 1,
            valorAbastecido: 0,
            km: 0,
        }
    );

    useEffect(() => {
        setType(route.params.type);
        route.params.type === 1 ? setTitle('Gasolina') : setTitle('Etanol');
    }, []);

    const salve = () => {
        let data = {
            'valorAtual': form.valorAtual,
            'valorAbastecido': form.valorAbastecido,
            'km': form.km,
        };
        console.log(12);

    };

    return (
        <View>
            <View>
                <Text>{title}</Text>
            </View>
            <ListItem>
                <ListItem.Content>
                    <ListItem>
                        <Text>Valor Atual</Text>
                        <View style={{ width: 200 }}>
                            <Input
                                placeholder='Valor corrente do combustivel'
                                keyboardType="numeric"
                                value={form.valorAtual}
                                onChangeText={valorAtual => setForm({ ...form, valorAtual })}
                            />
                        </View>
                    </ListItem>
                    <ListItem>
                        <Text>Valor abast.</Text>
                        <View style={{ width: 200 }}>
                            <Input
                                placeholder='Valor corrente do combustivel'
                                keyboardType="numeric"
                                value={form.valorAbastecido}
                                onChangeText={valorAbastecido => setForm({ ...form, valorAbastecido })}
                            />
                        </View>
                    </ListItem>
                    <ListItem>
                        <Text>Kilometragem</Text>
                        <View style={{ width: 200 }}>
                            <Input
                                keyboardType="numeric"
                                placeholder='Valor corrente do combustivel'
                                value={form.km}
                                onChangeText={km => setForm({ ...form, km })}
                            />
                        </View>
                    </ListItem>
                    <ListItem>
                        <Text>Total de litros: {(form.valorAbastecido / form.valorAtual).toFixed(2)}</Text>
                    </ListItem>
                </ListItem.Content>
            </ListItem>
            <Button
                title="Salvar"
                onPress={() => salve()}
            />
        </View>
    );
};

export default Fuel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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