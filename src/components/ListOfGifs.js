import React, { useState, useEffect } from "react";
import Gif from "./Gif";
import getGifs from "../service/getGifs";


export default function ListOfGifs({params}) {

    const [gifs, setGifs] = useState([]);
    const {search} = params;

    useEffect(function () {
        getGifs(search).then((gif) => {
            setGifs(gif);
        });
    }, [search]);

    return (
        gifs.map((i) => {
            return (
                <Gif
                    key={i.id}
                    title={i.title}
                    id={i.id}
                    url={i.images.fixed_width_downsampled.url}
                />
            );
        })

    );
}