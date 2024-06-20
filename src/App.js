import "./App.css";
import React from "react";
import { Link, Route } from "wouter";
import Home from "./pages/Home/Home";
import SearchResults from "./pages/SearchResults/SearchResults";

function App() {

    return (
        <div className="App">
            <section className="App-content">

                <Link to={"/"}>
                    <h1>HOME</h1>
                </Link>

                <Route component={Home}
                    path={"/"} />

                <Route component={SearchResults}
                    path={"/search/:search"} />

            </section>
        </div>
    );
}

export default App;
