import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Task = (task) => {
    console.log(task)
  return (
        <View style = {{ alignItems : 'center'}}>
            <View style = {styles.taskItems}>
            <View style = {styles.taskLeft}>
                <View style = {styles.square}></View>
                <Text style = {styles.taskText}>{task['title']}</Text>
            </View>
        </View>
        </View>
  )
}

export default Task

const styles = StyleSheet.create({
    taskItems : {
        backgroundColor : '#fff',
        width : '90%',
        padding : 13,
        marginBottom : 10,
        borderRadius : 10
    },
    taskLeft : {
        flexDirection : 'row',
        flexWrap : 'wrap'
    },
    taskText : {
        fontSize : 15,
        color : '#686868'
    },
    square : {
        width : 24,
        height : 24,
        borderRadius : 5,
        marginRight : 10,
        backgroundColor : '#00C5FF',
        opacity : 0.4
    }
})