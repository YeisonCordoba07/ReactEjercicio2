import React from "react";
import { useGifs } from "../../hook/useGifs";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";

export default function SearchResults({ params }) {
    const { search } = params;
    const { loading, gifs } = useGifs({ search });
    console.log("ListOfGifs");

    return (
        <>
            {loading ?
                (
                    <div>
                        <p>Loading ...</p>
                    </div>
                ) : (
                    <>
                        <ListOfGifs gifs={gifs} />
                    </>
                )}
        </>
    );
}
