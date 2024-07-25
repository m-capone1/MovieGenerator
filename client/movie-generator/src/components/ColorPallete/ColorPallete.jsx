import { useEffect } from "react";
import './ColorPallete.scss';

export default function ColorPallete({colors}) {
    console.log(colors);
    return (
        <section>
            <div className="color-pallete">
                {colors.map((color, index) => (
                    <div key={color}>
                        <h1 className="color-pallete__option" style={{backgroundColor: `${color}`, color: `${color}`}}>color</h1>
                    </div>
                ))}
            </div>
        </section>
    );
}