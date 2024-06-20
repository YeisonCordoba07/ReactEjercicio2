import React from "react";
import Gif from "../Gif/Gif";
import "./ListOfGifs.css";

import { useGifs } from "../../hook/useGifs";

function ListOfGifs({ params }) {

    const { search } = params;
    const {loading, gifs} = useGifs({search});
    console.log("ListOfGifs");

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

export default React.memo(ListOfGifs);
