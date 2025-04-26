import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContexts";
const themeColors = ["bg-amber-200", "bg-orange-200", "bg-cyan-200", "bg-gray-200"]
import "./ThemeSelector.css"
export default function ThemeSelector() {
    const { color, setColor } = useContext(ThemeContext);
    return (
        <div className="container theme-selector">
            <div className="theme-links ">
                {themeColors.map((color) => (
                    <span
                        key={color}
                        className={`${color}`}
                        onClick={() => setColor(color)}
                    ></span>
                ))}
            </div>
        </div>
    );

}