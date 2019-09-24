import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import Simples from './components/Simples';
import Parimpar from './components/Parimpar';
import { Inverter, MegaSena } from './components/Multi';

const AppNaviagor = createDrawerNavigator({
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: () => ({ title: 'Mega Sena' })
    },
    Inverter: {
        screen: () => <Inverter text='React Native' />
    },
    Parimpar: {
        screen: () => <Parimpar numero={8} />,
        navigationOptions: () => ({ title: 'Par ou Ímpar' })
    },
    Simples: {
        screen: () => <Simples text='Texto Simples' />
    }
}, { drawerWidth: 300 });

export default createAppContainer(AppNaviagor);