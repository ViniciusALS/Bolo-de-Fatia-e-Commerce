import { HomeFocusedSvg, HomeSvg } from "@/assets/icons";
import { View } from "react-native";

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