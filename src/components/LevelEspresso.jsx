import { useState } from "react";
const containerStyle = {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
};
const itemContainerStyle = {
    display: "flex",
    gap: ".2rem",
};
const textStyle = {
    margin: "0",
    fontSize: "1rem",
};
export default function LevelEspresso({ maxRating = 10,
    color = "#fcc419",
    size = 20,
    onRating, }) {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    function handleSetRating(rating) {
        setRating(rating);
        onRating(rating);
    }

    return (
        <>
            <div style={containerStyle}>
                <div style={itemContainerStyle}>
                    {Array.from({ length: maxRating }, (val, i) => (
                        <Bean
                            key={i}
                            fill={hoverRating ? hoverRating >= i + 1 : rating >= i + 1}
                            color={color}
                            size={size}
                            onRating={() => handleSetRating(i + 1)}

                        />
                    ))}
                </div>

            </div>
        </>
    );

}
function Bean({ fill, color, size, onRating }) {
    return (
        <span onClick={onRating}
        >
            {fill ?
                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" fill={color} version="1.1" id="Capa_1" width={size} height={size} viewBox="0 0 326.05 326.05" xml:space="preserve">
                    <g>
                        <path d="M14.257,275.602C-17.052,220.391,4.253,133.798,69.023,69.01c73.553-73.543,175.256-91.076,227.182-39.16   c0.061,0.068,0.112,0.145,0.195,0.214c-10.392,30.235-43.486,94.567-142.686,129.348C62.842,191.29,27.788,241.972,14.257,275.602z    M310.81,48.75c-7.871,18.361-21.57,42.356-45.173,65.957c-23.725,23.735-57.445,47.046-105.208,63.8   C63.49,212.5,36.405,268.149,28.848,295.116c0.357,0.36,0.664,0.733,1.011,1.083c51.921,51.918,153.628,34.386,227.176-39.169   C322.479,191.585,343.526,103.869,310.81,48.75z" />
                    </g>
                </svg> :
                <svg xmlns="http://www.w3.org/2000/svg" fill={color} width={size} height={size} viewBox="0 0 24 24">
                    <g id="Coffee_Bean" data-name="Coffee Bean">
                        <path d="M19.151,4.868a6.744,6.744,0,0,0-5.96-1.69,12.009,12.009,0,0,0-6.54,3.47,11.988,11.988,0,0,0-3.48,6.55,6.744,6.744,0,0,0,1.69,5.95,6.406,6.406,0,0,0,4.63,1.78,11.511,11.511,0,0,0,7.87-3.56C21.3,13.428,22.1,7.818,19.151,4.868Zm-14.99,8.48a11.041,11.041,0,0,1,3.19-5.99,10.976,10.976,0,0,1,5.99-3.19,8.016,8.016,0,0,1,1.18-.09,5.412,5.412,0,0,1,3.92,1.49.689.689,0,0,1,.11.13,6.542,6.542,0,0,1-2.12,1.23,7.666,7.666,0,0,0-2.96,1.93,7.666,7.666,0,0,0-1.93,2.96,6.589,6.589,0,0,1-1.71,2.63,6.7,6.7,0,0,1-2.63,1.71,7.478,7.478,0,0,0-2.35,1.36A6.18,6.18,0,0,1,4.161,13.348Zm12.49,3.31c-3.55,3.55-8.52,4.35-11.08,1.79a1.538,1.538,0,0,1-.12-.13,6.677,6.677,0,0,1,2.13-1.23,7.862,7.862,0,0,0,2.96-1.93,7.738,7.738,0,0,0,1.93-2.96,6.589,6.589,0,0,1,1.71-2.63,6.589,6.589,0,0,1,2.63-1.71,7.6,7.6,0,0,0,2.34-1.37C20.791,9.2,19.821,13.488,16.651,16.658Z" />
                    </g>
                </svg>}
        </span>

    );

}