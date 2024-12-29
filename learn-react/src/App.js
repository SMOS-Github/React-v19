import './App.css';
import About from './components/About';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import AlertPopUp from './components/AlertPopUp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Navbar mode={DarkMode} dark={dark} light={light} col={DarkMode} tx={textLight} />
        },
        {
            path: "/AlertPopUp",
            element: <AlertPopUp enable={pop} myText={!def ? "Ligth" : "Dark"} />
        },
        {
            path: "/TextArea",
            element: <TextArea dark={dark} light={textLight} color={cc} />
        }
    ])


    const [def, set] = useState(false);
    const [popUp, setPopUp] = useState(false);
    const [pop, setPop] = useState(0);

    const DarkMode = () => {
        set(!def);
        document.body.style.backgroundColor = !def ? 'black' : 'white';
        document.body.style.color = !def ? 'white' : 'black';
        setPop(1);
        setTimeout(() => {
            setPop(0);
        }, 1000)
        document.title = textLight;
    };

    let cc = def ? "dark" : "primary";
    let dark = !def ? "light" : "dark";
    let light = def ? "dark" : "light";
    let textLight = def ? "light" : "dark";

    return (
        <>
            <Navbar mode={DarkMode} dark={dark} light={light} col={DarkMode} tx={textLight} />
            <RouterProvider router={router}/>
        </>
    );

}

export default App;
