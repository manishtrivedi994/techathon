import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import CustomText from "../../presentation/widgets/custom-text";
import YoutubeTemplate from "../youtube-template";

const LearnYoutubeSection = () => {
    const youtubeData = Array(6).fill(null); // Create an array with 6 empty elements

    const renderYoutubeTemplate = ({ item }:any) => {
        return <YoutubeTemplate />;
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <CustomText style={styles.textHeader}>Learn From Youtube</CustomText>
                <CustomText style={styles.metaText}>
                    These short videos will help you understand what went wrong and how to fix it.
                </CustomText>
            </View>
            <FlatList
                data={youtubeData}
                renderItem={renderYoutubeTemplate}
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.flatList}
                contentContainerStyle={styles.flatListContent}
            />
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
    metaText: {
        color: "rgba(255, 255, 255, 0.69)",
        fontWeight: "400",
        fontSize: 12,
        marginTop: 8,
    },
    flatList: {
        marginTop: 16, // Adjust spacing between text and FlatList
    },
    flatListContent: {
        paddingHorizontal: 16, // Add padding for horizontal scroll
        gap: 17, // add gap between items
    },
    mainContainer: {
        paddingBottom:100
    }
});

export default LearnYoutubeSection;