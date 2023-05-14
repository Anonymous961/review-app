import {StyleSheet, Text, View} from 'react-native'
import { globalStyles } from '../styles/global';

const Review = ({route,navigation}:any) => {
    const review=route.params;
    return ( 
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>{review.title}</Text>
            <Text>{review.body}</Text>
            <Text>{review.rating}</Text>
        </View>
     );
}
 
export default Review;

const styles=StyleSheet.create({
    container:{
        padding:24
    }
})