import React, { useState, useEffect } from "react";
import Gif from "./Gif";
import getGifs from "../service/getGifs";
import "./ListOfGifs.css";

export default function ListOfGifs({ params }) {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(true);
    const { search } = params;

    useEffect(
        function () {
            setLoading(true);
            getGifs(search).then((gif) => {
                setGifs(gif);
                setLoading(false);
            });
        },
        [search]
    );

    if(loading){
        return(
            <div>
                <p>Loading ...</p>
            </div>
        );
    }

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
