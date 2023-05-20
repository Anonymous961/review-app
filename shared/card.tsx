import {Text,View,StyleSheet} from 'react-native'
const Card = (props:any) => {
    // const item=props.item;
    // console.log(item)
    return ( 
        <View style={[styles.card, styles.shadowProp]}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
     );
}
 
export default Card;

const styles=StyleSheet.create({
    card:{
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 30,
        paddingHorizontal: 25,
        width: '100%',
        marginVertical: 10
    },
    cardContent:{
        margin:18
    },
    shadowProp: {
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation:2
    },
})