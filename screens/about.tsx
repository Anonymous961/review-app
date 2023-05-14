import {StyleSheet, Text, View, Button} from 'react-native'
import { globalStyles } from '../styles/global';

const About = ({navigation}:any) => {
    return ( 
        <View style={globalStyles.container}>
            <Text>About Screen</Text>
            <Button title='GO Back' onPress={()=>navigation.goBack()}/>
        </View>
    );
}
 
export default About;

const styles=StyleSheet.create({
    container:{
        padding:24
    }
})