import React from "react";
import { StyleSheet, View } from "react-native";
import { SvgIcons } from "../../icons/svgs/SvgIcons";
import CustomText from "../custom-text";

interface IWarningTooltipProps {
    variant: "warning" | "danger";
}
const toolTipVariant = {
    warning: {
        backgroundColor: "#181403",
        Icon: <SvgIcons.WarningIcon />,
    },
    danger: {
        backgroundColor: "rgba(255, 0, 0, 0.05)",
        Icon: <SvgIcons.DangerIcon />,
    },
};

const WarningTooltip = ({ variant }: IWarningTooltipProps) => {
    if (!toolTipVariant[variant]) {
        // Handle invalid variant, e.g., return null or a default view
        return null;
    }

    return (
        <View style={[styles.container, { backgroundColor: toolTipVariant[variant].backgroundColor }]}>
            <View style={styles.headingContainer}>
                {toolTipVariant[variant].Icon}
                <CustomText style={styles.textHeading}>Overspeading</CustomText>
            </View>
            <CustomText style={styles.infoText}>Practice with Cars24 Reflex Challenge – improve reaction time.</CustomText>
        </View>
    );
};

export default WarningTooltip;

const styles = StyleSheet.create({
    container: {
        marginTop:12,
        padding: 16,
        borderRadius: 8,
    },
    textHeading: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 14
    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 8
    },
    infoText: {
        color: '#B5B6B6',
        fontWeight: '400',
        fontSize: 12,
        marginTop: 8
    }
});