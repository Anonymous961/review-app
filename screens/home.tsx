import {StyleSheet, Text, View, Button} from 'react-native'
import { globalStyles } from '../styles/global';

const Home = ({navigation}:any) => {
    return ( 
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title='About Page'onPress={()=>navigation.navigate('About')}/>
            <Button title='Review Page'onPress={()=>navigation.navigate('Review')}/>
        </View>
     );
}
 
export default Home;