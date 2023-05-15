import {StyleSheet, Text, View, FlatList,TouchableOpacity, Button} from 'react-native'
import { globalStyles } from '../styles/global';
import {useState} from 'react'

const Home = ({navigation}:any) => {
    const [reviews,setReviews]=useState([
        {title:"some text1",rating:5,body:"some content",key:1},
        {title:"some text2",rating:4,body:"some content",key:2},
        {title:"some text3",rating:3,body:"some content",key:3},
        {title:"some text4",rating:2,body:"some content",key:4},
    ])
    return ( 
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('Review',item)}>
                        <View style={styles.review}>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                            <Text> Rating {item.rating}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
     );
}
 
export default Home;

const styles=StyleSheet.create({
    review:{
        // borderWidth:1,
        borderColor:"#333",
        // borderStyle:'dashed',
        padding:10,
        margin:10,
        borderRadius:10,
        backgroundColor:'#defae6',
    }
})