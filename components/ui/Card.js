import { View, StyleSheet, Dimensions} from "react-native";
import Colors from "../../constants/color";


const deviceWidth = Dimensions.get('window').width 

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}


const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: deviceWidth < 380 ? 18 : 36,
    backgroundColor: Colors.primary800,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
export default Card;
