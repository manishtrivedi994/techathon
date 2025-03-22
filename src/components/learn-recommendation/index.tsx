import { ScrollView, StyleSheet, View } from "react-native";
import CustomText from "../../presentation/widgets/custom-text";
import WarningTooltip from "../../presentation/widgets/warning-tooltip";
import React from "react";

interface RecommendationItem {
    title: string;
    subtitle: string;
    type: "warning" | "info" | "error"; // Assuming `type` can have these values
}

interface LearnRecommendationProps {
    recommendationSection: {
        title: string;
        recommendation: RecommendationItem[];
    };
}

const LearnRecommendation: React.FC<LearnRecommendationProps> = ({ recommendationSection }) => {
    const { title, recommendation } = recommendationSection;

    return (
        <View style={styles.container}>
            <ScrollView>
                <CustomText style={styles.textHeader}>{title}</CustomText>
                {recommendation?.map((item, index) => (
                    <WarningTooltip
                        key={index}
                        variant={item.type}
                        title={item.title}
                        subtitle={item.subtitle}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 36,
        paddingHorizontal: 16,
    },
    textHeader: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 18,
    },
});

export default LearnRecommendation;