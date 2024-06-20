import "./App.css";
import React from "react";
import { Link, Route } from "wouter";
import ListOfGifs from "./components/ListOfGifs/ListOfGifs";
import Home from "./pages/Home/Home";

function App() {

    return (
        <div className="App">
            <section className="App-content">

                <Link to={"/"}>
                    <h1>HOME</h1>
                </Link>

                <Route component={Home}
                    path={"/"} />

                <Route component={ListOfGifs}
                    path={"/search/:search"} />

            </section>
        </div>
    );
}

export default App;
