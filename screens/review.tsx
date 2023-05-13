import {StyleSheet, Text, View} from 'react-native'
import { globalStyles } from '../styles/global';

const Review = () => {
    return ( 
        <View style={globalStyles.container}>
            <Text>Review Screen</Text>
        </View>
     );
}
 
export default Review;

const styles=StyleSheet.create({
    container:{
        padding:24
    }
})