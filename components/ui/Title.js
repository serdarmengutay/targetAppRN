import { Text, View, StyleSheet, Platform} from "react-native";


function Title({ children }) 
{
  return <Text style={styles.title}>{children}</Text>;
}
const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        borderWidth: Platform.OS === 'android' ? 2 : 0,
        // borderWidth: Platform.select({ ios: 0, android: 2})  olarak da yazılabilir.
        borderColor: 'white',
        padding: 12,
        fontFamily: 'open-sans-bold',
        borderRadius: 6,
        maxWidth: '80%'
    }
})
export default Title;
