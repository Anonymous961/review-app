import {Text,View,StyleSheet} from 'react-native'
const Card = (props:any) => {
    // const item=props.item;
    // console.log(item)
    return ( 
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
     );
}
 
export default Card;

const styles=StyleSheet.create({
    card:{
        borderRadius:5,
        marginHorizontal:4,
        marginVertical:5,
        shadowOffset:{width:2,height:3},
        shadowColor:'black',
        shadowOpacity:0.3,
        elevation:2,
        shadowRadius:5,
        // padding:10
    },
    cardContent:{
        margin:18
    }
})