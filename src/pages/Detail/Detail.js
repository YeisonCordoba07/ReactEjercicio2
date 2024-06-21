import React, {useContext} from "react";
import { GifsContext } from "../../context/GifsContext";
import Gif from "../../components/Gif/Gif";

export default function Detail ({params}){

    const {gifs} = useContext(GifsContext);

    const gif = gifs.find((i) =>{
        if(i.id === params.id){
            return (i);
        }
    })

    return(
        <Gif
        key={gif.id}
        title={gif.title}
        id={gif.id}
        url={gif.images.fixed_width_small.url}
    />
    );
}