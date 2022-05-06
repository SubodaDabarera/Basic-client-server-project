import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import WelcomePage from './WelcomePage'

const Main = () => {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = {<WelcomePage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Main;