import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import getGifs from "../../service/getGifs";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";

export default function Home() {
    const [search, setKeyword] = useState("");
    const [path, setPath] = useLocation();
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault(); 
        setPath(`/search/${search}`);
        console.log(search);
    };

    const handleChange = (e) => { 
        setKeyword(e.target.value);
    };



    useEffect(function(){

        setLoading(true);

        getGifs().then(gif =>{
            setGifs(gif);
            setLoading(false);
        })
    }, [search]);

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

            <ListOfGifs params={gifs}/>
        </>
    );
}
