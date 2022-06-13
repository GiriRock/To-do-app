import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FormButton from '../components/FormButton'
import {AuthContext} from '../navigation/AuthProvider';
import React, {useContext} from 'react';
const Profile = () => {
    const {logout} = useContext(AuthContext);
    return (
    <View style = {styles.container}>
      <FormButton
        buttonTitle="Logout"
        onPress={() => logout()}/>
    </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#e6e6e6'
    }
})