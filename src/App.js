import React from 'react';
import './SideBar';
import {SideBar} from "./SideBar";
import {NSE} from "./NSE";
import {Header} from "./page_header";

function App() {
    return (
        <div>
            <Header/>
            <NSE/>
            <SideBar />
        </div>
    );
}

export default App;
