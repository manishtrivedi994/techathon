import { StyleSheet, View } from "react-native"
import { SvgIcons } from "../../presentation/icons/svgs/SvgIcons"
import CustomText from "../../presentation/widgets/custom-text";

const BackHeader = () => {
    return (
        <View style={styles.container}>
            <SvgIcons.LeftBackButton/>
            <CustomText style={styles.text}>Learn</CustomText>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 16,
    paddingVertical:20
  },
  text: {
    fontSize:16,
    marginLeft: 10,
    fontWeight:"600",
    color: "#fff"
  }
});

export default BackHeader;