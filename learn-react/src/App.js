import './App.css';
import About from './components/About';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import AlertPopUp from './components/AlertPopUp';


function App() {

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
            <AlertPopUp enable={pop} myText={!def ? "Ligth" : "Dark"} />
            <TextArea dark={dark} light={textLight} color={cc} />
            
        </>
    );

}

export default App;
