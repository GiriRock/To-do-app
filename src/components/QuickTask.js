import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'
import removeTask from '../todo/removeTask'
const QuickTask = (task) => {
        return (
                <View style = {{ alignItems : 'center'}}>
                    <View style = {styles.taskItems}>
                    <View style = {styles.taskLeft}>
                        <View style = {styles.square}></View>
                        <Text style = {styles.taskText}>{task['title']}</Text>
                    </View>
                    <TouchableOpacity style= {styles.checkboxWrapper} onPress = {() => removeTask(task)}>
                        <Fontisto style= {styles.checkbox} name = 'trash'/>
                    </TouchableOpacity>
                    </View>
                </View>
        )
}

export default QuickTask

const styles = StyleSheet.create({
    taskItems : {
        backgroundColor : '#fff',
        width : '90%',
        padding : 13,
        marginBottom : 10,
        borderRadius : 10,
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    taskLeft : {
        flexDirection : 'row',
        alignItems : 'center'
    },
    taskText : {
        fontSize : 15,
        color : '#686868',
        width : "80%"
    },
    square : {
        width : 24,
        height : 24,
        borderRadius : 5,
        marginRight : 10,
        backgroundColor : '#00C5FF',
        opacity : 0.4
    },
    checkbox : {
        fontSize : 20,
        color : '#E70000'
    },
    checkboxWrapper : {
        justifyContent : 'center'
    }
})