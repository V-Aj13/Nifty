import React from 'react';
import
{
    SafeAreaView,
    FlatList,

} from 'react-native';

import Product from './Product';

const listProducts = "../images/"

const products = [
    {brand:"Nifty", type:"Pads", name:"Always Maxi", price:50, productImage: listProducts},
    {brand:"Nifty", type:"Gum", name:"Gum", price:50, productImage: listProducts},
    {brand:"Nifty", type:"Lip", name:"Labello", price:50, productImage: listProducts},
    {brand:"Nifty", type:"Wipes", name:"Evoluderm", price:50, productImage: listProducts},
]

const productScreen = () => {
    return (
        <SafeAreaView>
            <FlatList
            numColumns={2} 
            data={products}
            renderItem={({item}) => (<Product product={item}/>)}>
            </FlatList>
        </SafeAreaView>
        
    );
};

export default productScreen;