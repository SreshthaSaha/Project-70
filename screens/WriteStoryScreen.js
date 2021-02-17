import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity,TextInput } from 'react-native';
import MyHeader from '../components/MyHeader'

export default class WriteStoryScreen extends Component{
    render(){
        return(
            <View>
                
                <View>
                    <TextInput
                    style ={styles.formTextInput}
                    placeholder={"Title of the Story"}
                   />
                   <TextInput
                    style ={styles.formTextInput}
                    placeholder={"Author of the story"}
                   />
                   <TextInput
                    style ={styles.formTextInput}
                    multiline = {true}
                    placeholder={"Write Story"}
                   />
                   <TouchableOpacity>
                       <Text>Submit</Text>
                   </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    }
})
