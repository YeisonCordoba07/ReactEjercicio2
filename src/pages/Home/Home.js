import { Link, useLocation } from "wouter";
import { useState } from "react";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import { useGifs } from "../../hook/useGifs";

export default function Home() {
    const [search, setSearch] = useState("");
    const [path, setPath] = useLocation();

    const {loading, gifs} = useGifs({search});

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setPath(`/search/${search}`);
        console.log(search);
    };


    const handleChange = (e) => { 
        setSearch(e.target.value);
    };


    if(loading){
        return(
            <div>
                <p>Loading ...</p>
            </div>
        );
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={search} 

                />
            </form>

            <Link to={"/search/panda"}>Pandas</Link>
            <Link to={"/search/cat"}>Cats</Link>
            <Link to={"/search/dog"}>Dogs</Link>

            <ListOfGifs params={gifs}/>
        </>
    );
}
