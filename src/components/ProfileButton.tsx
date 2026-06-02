import { ProfileFocusedSvg, ProfileSvg } from "@/assets/icons";
import { View } from "react-native";

// ─── Primary Button ────────────────────────────────────────────────────────────
interface props {
    isFocused: boolean;
}

export default function ProfileButton({ isFocused }: props) {
    if (isFocused) {
        return (
            <View>
                <ProfileFocusedSvg/>
            </View>
        );
    }
    return (
        <View>
            <ProfileSvg/>
        </View>
    );
}