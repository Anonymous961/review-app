import {StyleSheet, Text, View} from 'react-native'

const Home = () => {
    return ( 
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
     );
}
 
export default Home;

const styles=StyleSheet.create({
    container:{
        padding:24
    }
})