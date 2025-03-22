import React from "react";
import { Image, StyleSheet, View } from "react-native";
import CustomText from "../../presentation/widgets/custom-text";

const thumbnail = require('./assets/thumbnail.png');
const youtubeIcon = require('./assets/youtube.png');
const YoutubeTemplate = () => {
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image style={styles.imageContainer} source={thumbnail} />
            </View>
            <Image style={styles.youtubeIcon} source={youtubeIcon} />
            <View style={styles.overlay} />
            <View style={styles.textContainer}>
                <CustomText style={styles.heading} color="#fff" fontSize={14} fontWeight="600">
                    10 reasons why you crash
                </CustomText>
                <CustomText style={styles.info} color="rgba(255, 255, 255, 0.69)" fontWeight="400" fontSize={12}>
                    450+ people viewed this
                </CustomText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: 258,
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
        cursor: "pointer",
    },
    youtubeIcon: {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: [{ translateX: -25 }, { translateY: -25 }],
        zIndex: 12,
    },
    textContainer: {
        marginTop: 8, // Add spacing between image and text
        paddingHorizontal: 4, // Add some horizontal padding
    },
    heading: {
        marginTop:12
    },
    info: {
        marginTop:5
    }
});

export default YoutubeTemplate;