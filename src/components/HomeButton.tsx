import { View } from "react-native";
import { HomeFocusedSvg, HomeSvg } from "../../assets/icons";

// ─── Primary Button ────────────────────────────────────────────────────────────
interface props {
    isFocused: boolean;
}

export default function HomeButton({ isFocused }: props) {
    if (isFocused) {
        return (
            <View>
                <HomeFocusedSvg/>
            </View>
        );
    }
    return (
        <View>
            <HomeSvg/>
        </View>
    );
}