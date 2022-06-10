import { StyleSheet, Text, View } from 'react-native'
import FormButton from '../components/FormButton'
import {AuthContext} from '../navigation/AuthProvider';
import React, {useContext, useState} from 'react';

const HomePage = () => {
    const {logout} = useContext(AuthContext);
    return (
    <View style = {styles.container}>
      <Text>Home Page</Text>
      <FormButton
        buttonTitle="Logout"
        onPress={() => logout()}/>
    </View>
    
    
  )
}

export default HomePage

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})