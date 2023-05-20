import {StyleSheet, Text, View} from 'react-native'
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

const Review = ({route,navigation}:any) => {
    const review=route.params;
    return ( 
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>{review.title}</Text>
                <Text>{review.body}</Text>
                <Text>{review.rating}</Text>
            </Card>
        </View>
     );
}
 
export default Review;

const styles=StyleSheet.create({
    container:{
        padding:24
    }
})