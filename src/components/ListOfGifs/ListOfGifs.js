import React from "react";
import Gif from "../Gif/Gif";
import "./ListOfGifs.css";


export default function ListOfGifs({ gifs }) {

    return (
        <div className="listOfGifs">
            {gifs.map((i) => {
                return (
                    <Gif
                        key={i.id}
                        title={i.title}
                        id={i.id}
                        url={i.images.fixed_width_small.url}
                    />
                );
            })}
        </div>
    );
}