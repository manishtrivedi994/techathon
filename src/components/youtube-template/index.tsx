import React from "react";
import { Image, StyleSheet, View, TouchableOpacity, Linking } from "react-native";
import CustomText from "../../presentation/widgets/custom-text";

interface YoutubeTemplateProps {
    thumbnail: string; // URL or require() for local images
    title: string;
    views: string;
    url: string; // YouTube video URL
}

const YoutubeTemplate: React.FC<YoutubeTemplateProps> = ({ thumbnail, title, views, url }) => {
    const youtubeIcon = require('./assets/youtube.png'); // Local icon

    // Function to handle opening the YouTube video
    const handleOpenYoutube = () => {
        Linking.openURL(url).catch((err) => {
            console.error("Failed to open URL:", err);
        });
    };

    return (
        <TouchableOpacity onPress={handleOpenYoutube} activeOpacity={0.8}>
            <View style={styles.container}>
                <View style={styles.image}>
                    <Image
                        style={styles.imageContainer}
                        source={typeof thumbnail === 'string' ? { uri: thumbnail } : thumbnail}
                    />
                </View>
                <Image style={styles.youtubeIcon} source={youtubeIcon} />
                <View style={styles.overlay} />
                <View style={styles.textContainer}>
                    <CustomText style={styles.heading} color="#fff" fontSize={14} fontWeight="600">
                        {title}
                    </CustomText>
                    <CustomText style={styles.info} color="rgba(255, 255, 255, 0.69)" fontWeight="400" fontSize={12}>
                        {views}
                    </CustomText>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: 258,
        marginRight: 17, // Add spacing between items in FlatList
    },
    image: {
        borderRadius: 10,
        overflow: 'hidden',
    },
    imageContainer: {
        width: 258,
        height: 143,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.50)',
    },
    youtubeIcon: {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: [{ translateX: -25 }, { translateY: -25 }],
        zIndex: 12,
    },
    textContainer: {
        marginTop: 8,
        paddingHorizontal: 4,
    },
    heading: {
        marginTop: 12,
    },
    info: {
        marginTop: 5,
    },
});

export default YoutubeTemplate;