import { Link, useLocation } from "wouter";
import { useState } from "react";

export default function Home() {
    const [keyword, setKeyword] = useState("");
    const [path, setPath] = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setPath(`/search/${keyword}`);
        console.log(keyword);
    };
    const handleChange = (e) => { 
        setKeyword(e.target.value);
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={keyword} 
                onChange={handleChange}
                />
            </form>
            <Link to={"/search/panda"}>Pandas</Link>

            <Link to={"/search/cat"}>Cats</Link>

            <Link to={"/search/dog"}>Dogs</Link>
        </>
    );
}
