import React from 'react';
import {Text , StyleSheet , View } from 'react-native'

const LinkableText = (props)=>{

    return(

        <Text style={{fontSize:props.sizeFont , textDecorationLine:props.underline}}>
            {props.children} 
        </Text>
    )
}


export default LinkableText;