import React from "react";
import "./Gif.css"

export default function Gif({title, id, url}){
    return (
        <a
        href={`#${id}`}
        className="Gif">
            <h3>{title}</h3>
            <img src={url} alt={title}/>
        </a>
    )
}