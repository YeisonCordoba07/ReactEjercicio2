import { useEffect, useState } from "react";
import getGifs from "../service/getGifs";

export function useGifs({search}){
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);


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
    return {loading, gifs};
}