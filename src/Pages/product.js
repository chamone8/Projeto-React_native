import React from 'react';

import {WebView,Text} from 'react-native';

const Product = ({ navigation }) => (
<WebView source={{uri:navigation.state.params.Product.url }}/>
);

Product.navigationOptions =({ navigation }) => ({ 
    title: navigation.state.params.Product.title

});


export default Product;