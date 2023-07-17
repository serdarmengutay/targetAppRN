import { Text, View, StyleSheet } from "react-native";


function Title({ children }) 
{
  return <Text style={styles.title}>{children}</Text>;
}
const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        fontFamily: 'open-sans-bold',
        borderRadius: 6
    }
})
export default Title;
