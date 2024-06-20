import { Link, useLocation } from "wouter";
import { useState } from "react";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import { useGifs } from "../../hook/useGifs";

export default function Home() {
    const [search, setSearch] = useState("");
    const [path, setPath] = useLocation();

    const {gifs} = useGifs();

    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        setPath(`/search/${search}`);
        console.log(search);
    };

    const handleChange = (e) => { 
        setSearch(e.target.value);
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={search} 
                onChange={handleChange}
                />
            </form>

            <Link to={"/search/panda"}>Pandas</Link>
            <Link to={"/search/cat"}>Cats</Link>
            <Link to={"/search/dog"}>Dogs</Link>

            <ListOfGifs gifs={gifs}/>
        </>
    );
}
