import {StyleSheet, Text, View,Image} from 'react-native'
import { globalStyles,images } from '../styles/global';
import Card from '../shared/card';

const Review = ({route,navigation}:any) => {
    const review=route.params;
    // console.log(review.rating)
    return ( 
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>{review.title}</Text>
                <Text>{review.body}</Text>
                <View>
                    <Text>Rating : {review.rating}</Text>
                    <Image source={images.ratings[review.rating]} style={styles.rating}/>
                    {/* <Image source={{uri: `assets:/rating-${review.rating}.png`}} style={styles.rating}/> */}
                </View>
                {/* <Text>{review.rating}</Text> */}
            </Card>
        </View>
     );
}
 
export default Review;

const styles=StyleSheet.create({
    container:{
        padding:24
    },
    rating:{
        marginTop:20,
        width:'100%',
        height:50,
        // elevation:3
    }
})