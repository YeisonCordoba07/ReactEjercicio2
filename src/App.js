import "./App.css";
import React from "react";
import { Link, Route } from "wouter";
import ListOfGifs from "./components/ListOfGifs";

function App() {
   
    return (
        <div className="App">
            <section className="App-content">
                <h1>Inicio</h1>
                <Link to={"/gif/panda"}>
                    Pandas
                </Link>

                <Link to={"/gif/cat"}>
                    Cats
                </Link>

                <Link to={"/gif/dog"}>
                    Dogs
                </Link>

            <Route component={ListOfGifs}
            path={"/gif/:search"}/>

            </section>
        </div>
    );
}

export default App;
