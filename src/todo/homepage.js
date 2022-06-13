import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, ActivityIndicator } from 'react-native'
import React, { useState , useEffect, useContext } from 'react';
import Task from '../components/Task';
import AntDesign from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../navigation/AuthProvider';

const HomePage = () => {
    const {user} = useContext(AuthContext);
    const [task,setTask] = useState('')
    const [ loading, setLoading ] = useState(true);
    const [ tasks, setTasks ] = useState([]);
    const TasksRef =  firestore().collection('Tasks')
    const addTask = ()=>{
      TasksRef.add({
        title: task,
        completed: false,
        userID : user.uid
      });
      setTask('');
      setLoading(true)
    }

    const fetchTasks = async () => {
       TasksRef.where('userID', '==' , user.uid).get().then(querySnapshot => {
        const list = [];
        querySnapshot.forEach(doc => {
          const { title, completed } = doc.data();
          list.push({
            id: doc.id,
            title,
            completed,
          });
        });
  
        setTasks(list);
  
        if (loading) {
          setLoading(false);
        }
      });
    }

    if (loading) {
      fetchTasks()
    }

    return (
    <View style = {styles.container}>
      <Text style = {{ fontSize : 35, fontWeight : 'bold', color : '#000000', marginBottom : 10}}>
        Your Tasks
      </Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Task {...item} />}
      />
      <View style = { styles.newTaskContainer}>
        <TextInput placeholder='Enter a Task' style = {styles.newTask} value={task} onChangeText={setTask} ></TextInput>
        <TouchableOpacity onPress={()=> {addTask(task)}}>
          <AntDesign name='pluscircleo' style = {styles.addTask}/>
        </TouchableOpacity>
      </View>
    </View>    
  )
}

export default HomePage

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#e6e6e6'
    },
    newTaskContainer : {
      position : 'absolute',
      flexDirection : 'row',
      justifyContent : 'space-around',
      alignItems : 'center',
      bottom : 10
      
    },
    addTask : {
      fontSize : 30
    },
    newTask : {
      backgroundColor : '#fff',
      width : "85%",
      marginLeft : 10,
      borderRadius : 60,
      paddingVertical : 10,
      paddingHorizontal : 20,
      borderColor : '#c0c0c0',
      borderWidth : 1
    }
})