import React,{Component} from 'react';
import {StyleSheet, SafeAreaView, View, Text, Button, FlatList} from "react-native";

class DownloadScreen extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <SafeAreaView style={styles.search_root}>
                <View style={styles.search_panel}>
                    <View style={styles.result_group}>
                        <Text style={styles.textLabel}>
                            Đang tải :
                        </Text>
                        <Text style={styles.textResult}>
                           0
                        </Text>
                    </View>
                    <View style={styles.result_group}>
                        <Text style={styles.textLabel}>
                            Hoàn Thành :
                        </Text>
                        <Text style={styles.textResult}>
                            0
                        </Text>
                    </View>
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
        justifyContent: 'flex-start',
        paddingRight:10,
        paddingLeft:10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor:'#222730',
    },

    result_group:{
        flexDirection:'row',
        flex:1,
        alignItems:'center'
    },
    textLabel:{
        flex: 1,
        color:'white',
        fontSize:16
    },
    textResult:{
        flex: 1,
        color:'#626ED4',
        fontSize:20,
        textAlign:'right',
        paddingRight:10,

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


export  default  DownloadScreen;
