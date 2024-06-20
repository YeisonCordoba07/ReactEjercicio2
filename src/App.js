import "./App.css";
import React from "react";
import { Link, Route } from "wouter";
import Home from "./pages/Home/Home";
import SearchResults from "./pages/SearchResults/SearchResults";
import StaticContext from "./context/StaticContext";
import Detail from "./pages/Detail/Detail";

function App() {

    return (
        <StaticContext.Provider value={
            {
                name: "nombre gif",
                otroNombre: true
            }
        }>
        <div className="App">
            <section className="App-content">

                <Link to={"/"}>
                    <h1>HOME</h1>
                </Link>

                <Route component={Home}
                    path={"/"} />

                <Route component={SearchResults}
                    path={"/search/:search"} />

                <Route component={Detail}
                    path={"/gif/:id"} />

            </section>
        </div>
        </StaticContext.Provider>
    );
}

export default App;
