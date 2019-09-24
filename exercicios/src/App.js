import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Simples from './components/Simples';
import Parimpar from './components/Parimpar';
import { Inverter, MegaSena } from './components/Multi';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Simples text='Flexível!!' />
                <Parimpar numero={10}></Parimpar>
                <Inverter text='React Native!'/>
                <MegaSena numeros={9} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});