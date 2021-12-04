import React from 'react';
import 
{ 
    View,
    Image, 
    Text
} from 'react-native';

class Product extends React.Component 
{
    render()
    {
        const {name, brand, price, productImage} = this.props.product
        return 
        (
            <View style {{width:'49%', alignItems:'center', marginHorizontal:'1%'}}>
                <Image style={{width:150, height: 150}} source={{require: productImage}}/>
                <Text>{name}</Text>
                <Text>{brand}</Text>
                <Text>{price}</Text>
               
            </View>
        )
    }
}

export default Product;