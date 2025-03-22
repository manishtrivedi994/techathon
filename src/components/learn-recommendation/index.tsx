import { ScrollView, StyleSheet, View } from "react-native"
import CustomText from "../../presentation/widgets/custom-text"
import WarningTooltip from "../../presentation/widgets/warning-tooltip"

const LearnRecommendation = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <CustomText style={styles.textHeader}>What we recommend</CustomText>
                <WarningTooltip variant="warning" />
                <WarningTooltip variant="warning" />
                <WarningTooltip variant="warning" />
                <WarningTooltip variant="warning" />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 36,
        paddingHorizontal: 16
    },
    textHeader: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 18
    }
})

export default LearnRecommendation