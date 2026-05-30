import { ArrowLeftSvg } from "@/assets/icons";
import { TouchableOpacity } from "react-native";

// ─── Primary Button ────────────────────────────────────────────────────────────
interface props {
    onPress: () => void;
}

export default function ReturnButton({ onPress }: props) {
    return (
        <TouchableOpacity onPress={onPress}>
            <ArrowLeftSvg/>
        </TouchableOpacity>
    );
}