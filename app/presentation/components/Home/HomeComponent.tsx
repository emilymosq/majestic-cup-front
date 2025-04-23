import { StyleSheet, View } from "react-native";
import WebView from 'react-native-webview';
import styles from "../../views/Home/StyleHome";

interface Props {
    videoUrl: string;
}

export const HomeRectangle = ({ videoUrl }: Props) => {
    return (
        <View style={styles.videoContainer}>
            <WebView
                style={styles.video}
                source={{ uri: videoUrl }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                allowsFullscreenVideo
            />
        </View>
    );
};


