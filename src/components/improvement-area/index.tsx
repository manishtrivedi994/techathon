import { StyleSheet, Text, View } from "react-native";
import CustomText from "../../presentation/widgets/custom-text";
import { SvgIcons } from "../../presentation/icons/svgs/SvgIcons";
import React from "react";

interface ImprovementAreaProps {
    improvementSection: {
        title: string;
        subtitle: string;
        improve: string[];
    };
}

const UspPoints: React.FC<{ improve: string[] }> = ({ improve }) => {
    return (
        <View style={styles.uspContainer}>
            {improve?.map((point, index) => (
                <View key={index} style={styles.usp}>
                    <SvgIcons.VerifyIcon />
                    <CustomText style={styles.uspText}>{point}</CustomText>
                </View>
            ))}
        </View>
    );
};

const ImprovementArea: React.FC<ImprovementAreaProps> = ({ improvementSection }) => {
    const { title, subtitle, improve } = improvementSection;

    return (
        <View style={styles.container}>
            <CustomText style={styles.text}>{title}</CustomText>
            <CustomText style={styles.metaText}>{subtitle}</CustomText>
            <UspPoints improve={improve} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        paddingHorizontal: 16,
    },
    text: {
        color: "#fff",
        fontWeight: "400",
        fontSize: 18,
        marginBottom: 4
    },
    metaText: {
        color: "#FFFFFFB0",
        fontWeight: "400",
        fontSize: 12,
        marginRight: 60,
    },
    uspText: {
        color: "#FFFFFF",
        fontWeight: "400",
        fontSize: 12,
        marginLeft: 10,
    },
    uspContainer: {
        marginTop: 24,
        rowGap: 8,
    },
    usp: {
        flexDirection: "row",
        alignItems: "center",
    },
});

export default ImprovementArea;