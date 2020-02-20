import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from './Pages/main';
import Product from './Pages/product';

const AppRoutes = createStackNavigator({
   MainScreen,
   Product
},
{
    navigationOptions:{
        headerStyle:{
            backgroudColor: "#DA552F"
        },
        headerTintColor: "#FFF"
    }
});

export default createAppContainer(AppRoutes);