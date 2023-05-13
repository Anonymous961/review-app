import {StyleSheet, Text, View} from 'react-native'

const Home = () => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.titleText}>Home Screen</Text>
        </View>
     );
}
 
export default Home;

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        justifyContent:"center",
        alignItems:"center"
    },
    titleText:{
        fontFamily:"Poppins-Bold"
    }
})