import { FavoritesFocusedSvg, FavoritesSvg } from "@/assets/icons";
import { View } from "react-native";

// ─── Primary Button ────────────────────────────────────────────────────────────
interface props {
    isFocused: boolean;
}

export default function FavoriteButton({ isFocused }: props) {
    if (isFocused) {
        return (
            <View>
                <FavoritesFocusedSvg/>
            </View>
        );
    }
    return (
        <View>
            <FavoritesSvg/>
        </View>
    );
}