 import React, { useContext } from 'react'
 import firestore  from '@react-native-firebase/firestore'


 function removeTask (task) {
   firestore().collection('Tasks').doc(task['id']).delete().then(()=>{
    console.log('Deleted')
  }).catch((error)=>{
    console.log(error);
})
 }
 
 export default removeTask