import { useEffect, useState, useContext } from "react";
import getGifs from "../service/getGifs";
import { GifsContext } from "../context/GifsContext";

export function useGifs({ search } = { search: "Simpsons" }) {
    const {gifs, setGifs} = useContext(GifsContext);
    const [loading, setLoading] = useState(false);

    
    useEffect(
        function () {
            setLoading(true);
            const auxSearch = search || localStorage.getItem("lastSearch");

            getGifs({ search: auxSearch })
                .then((gif) => {
                    setGifs(gif);
                    setLoading(false);
                    localStorage.setItem("lastSearch", search);
                });
        },
        [ search, setGifs]
    );
    return { loading, gifs };
}