import {StyleSheet} from 'react-native'

export const globalStyles=StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        // justifyContent:"center",
        // alignItems:"center"
    },
    titleText:{
        fontFamily:"Poppins-Bold",
        fontSize:18,
        color:"#333"
    },
    paragraph:{
        lineHeight:20,
        marginVertical:8
    }
});

export const images={
    ratings:{
        '5':require('../assets/rating-5.png'),
        '4':require('../assets/rating-4.png'),
        '3':require('../assets/rating-3.png'),
    }
}