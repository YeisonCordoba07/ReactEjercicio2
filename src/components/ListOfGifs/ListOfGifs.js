import React, { useState, useEffect } from "react";
import Gif from "../Gif/Gif";
import getGifs from "../../service/getGifs";
import "./ListOfGifs.css";

import { useGifs } from "../../hook/useGifs";

export default function ListOfGifs({ params }) {

    const { search } = params;
    const {loading, gifs} = useGifs({search});

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
