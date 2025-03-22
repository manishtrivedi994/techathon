import React from "react";
import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import CustomText from "../../presentation/widgets/custom-text";
import YoutubeTemplate from "../youtube-template";

interface VideoItem {
    thumbnail: string;
    url: string;
    title: string;
    views: string;
}

interface LearnYoutubeSectionProps {
    watchAndLearnSection: {
        title: string;
        subtitle: string;
        videos: VideoItem[];
    };
}

const LearnYoutubeSection: React.FC<LearnYoutubeSectionProps> = ({ watchAndLearnSection }) => {
    const { title, subtitle, videos } = watchAndLearnSection;

    const renderYoutubeTemplate = ({ item }: { item: VideoItem }) => {
        return (
            <YoutubeTemplate
                thumbnail={item.thumbnail}
                url={item.url}
                title={item.title}
                views={item.views}
            />
        );
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <CustomText style={styles.textHeader}>{title}</CustomText>
                <CustomText style={styles.metaText}>{subtitle}</CustomText>
            </View>
            <FlatList
                data={videos}
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
        marginTop: 16,
    },
    flatListContent: {
        paddingHorizontal: 16,
        gap: 17,
    },
    mainContainer: {
        paddingBottom: 100,
    },
});

export default LearnYoutubeSection;