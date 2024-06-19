import "./App.css";
import React from "react";
import { Link, Route } from "wouter";
import ListOfGifs from "./components/ListOfGifs";

function App() {
   
    return (
        <div className="App">
            <section className="App-content">
                <h1>Inicio</h1>
                <Link to={"/search/panda"}>
                    Pandas
                </Link>

                <Link to={"/search/cat"}>
                    Cats
                </Link>

                <Link to={"/search/dog"}>
                    Dogs
                </Link>

            <Route component={ListOfGifs}
            path={"/search/:search"}/>

            </section>
        </div>
    );
}

export default App;
