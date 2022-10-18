import logo from './logo.svg';
import './App.css';
import Table from "./components/Table";
import React from "react";
const  App=()=>{
    return(
        <div className="departures">
            <header>

                Departures
                <Table/>
            </header>
        </div>
    )
}

export default App;
