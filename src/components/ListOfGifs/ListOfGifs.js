import React from "react";
import Gif from "../Gif/Gif";
import "./ListOfGifs.css";


export default function ListOfGifs({ gifs }) {

    return (
        <div className="listOfGifs">
            {gifs.map((gif) => {
                return (
                    <Gif
                        key={gif.id}
                        title={gif.title}
                        id={gif.id}
                        url={gif.images.fixed_width_small.url}
                    />
                );
            })}
        </div>
    );
}