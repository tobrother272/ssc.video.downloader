import React,{Component} from 'react';
import {StyleSheet, SafeAreaView, View, TextInput, Button, FlatList} from "react-native";

class SearchScreen extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <SafeAreaView style={styles.search_root}>
                <View style={styles.search_panel}>
                    <TextInput placeholder={'Channel id | keyword search ...'} style={styles.txt_search} placeholderTextColor={'#BDBDBD'}/>
                    <Button title={'Search'} style={styles.btn_search} color={'#626ED4'} />
                </View>
                <View style={styles.result_view}>
                    {
                        //<FlatList data={} renderItem={} />
                    }
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    search_root:{
        flex:1,
        backgroundColor:'#2a3142',
        justifyContent:'flex-start',
        alignItems:'stretch',
        paddingRight:10,
        paddingLeft:10
    },
    search_panel:{
        backgroundColor:'#222730',
        flexDirection:'row',
        marginTop:20,
        height:50,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight:10,
        paddingLeft:10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor:'#222730',
    },
    txt_search:{
        flex: 1,
        color:'white',
        fontSize:16
    },
    btn_search:{
        width: 100,
        marginBottom:10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor:'#222730',
    },
    result_view:{
        flex:1,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor:'white'
    }

})


export  default  SearchScreen;
