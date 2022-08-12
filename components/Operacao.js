import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default class Operacao extends Component {
    render() {
        return (
            <Picker
                style={styles.operacao}
                selectedValue={this.props.operacao}
                onValueChange={op => { this.props.atualizaOperacao(op); }}
            >
                <Picker.Item label='Soma' value='soma' />
                <Picker.Item label='Subtração' value='subtracao' />
                <Picker.Item label='Divisão' value='divisao' />
                <Picker.Item label='Multiplicação' value='multiplicacao' />
            </Picker>
        );
    }
};

const styles = StyleSheet.create({
    operacao: {
        marginTop: 15,
        marginBottom: 15,
    }
});