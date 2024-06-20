import { useEffect, useState } from "react";
import getGifs from "../service/getGifs";

export function useGifs({search}= {search: null}){
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(
        function () {
            setLoading(true);
            const auxSearch = search || localStorage.getItem("lastSearch");
            
            getGifs({search: auxSearch}).then((gif) => {
                setGifs(gif);
                setLoading(false);
                localStorage.setItem("lastSearch", search);
            });
        },
        [search]
    );
    return {loading, gifs};
}