import { StyleSheet, Text, View } from "react-native"
import CustomText from "../../presentation/widgets/custom-text"
import { SvgIcons } from "../../presentation/icons/svgs/SvgIcons"

const UspPoints = () => {
    return (
        <View style={styles.uspContainer}>
            <View style={styles.usp}>
                <SvgIcons.VerifyIcon />
                <CustomText style={styles.uspText}>Maintain a steady speed as per local limits.</CustomText>
            </View>
            <View style={styles.usp}>
                <SvgIcons.VerifyIcon />
                <CustomText style={styles.uspText}>Maintain a steady speed as per local limits.</CustomText>
            </View>
            <View style={styles.usp}>
                <SvgIcons.VerifyIcon />
                <CustomText style={styles.uspText}>Maintain a steady speed as per local limits.</CustomText>
            </View>
        </View>
    )
}

const ImprovementArea = () => {
    return (
        <View style={styles.container}>
            <CustomText style={styles.text}>Improvement Areas</CustomText>
            <CustomText style={styles.metaText}>We've analyzed your recent activity. Here are a few things to focus on.</CustomText>
            <UspPoints />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        paddingHorizontal: 16
    },
    text: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 18
    },
    metaText: {
        color: '#FFFFFFB0',
        fontWeight: '400',
        fontSize: 12,
        marginRight: 60
    },
    uspText: {
        color: '#FFFFFF',
        fontWeight: '400',
        fontSize: 12,
        marginLeft: 10
    },
    uspContainer:{
        marginTop: 24,
        rowGap:8
    },
    usp: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    }
})

export default ImprovementArea;