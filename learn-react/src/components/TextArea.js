import React, { useState } from 'react';
import PropTypes from 'prop-types';
export default function TextArea(props) {

    const [def, set] = useState('');

    const words = def.trim() === "" ? 0 : def.trim().split(/\s+/).length;   //Regex syntex inside the line.
    const characters = def.length;

    const nonSpaceCharacters = def.replace(/\s/g, "").length;

    function OnClickChange(e) {
        set(e.target.value);
    }
    function ClearText() {
        set("");
    }
    function ChangeCase(e) {
        set(def.toUpperCase());
    }
    function ChangeLower(e) {
        set(def.toLowerCase());
    }
    function CopyToClip() {
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    
    return (
        <>
            
            <div className="container my-1">
                <h1 id="heading">{props.title}</h1>
                <textarea className={`form-control fs-4 bg-${props.dark} text-${props.light}`} id="exampleFormControlTextarea1" placeholder="Enter Text's to change Uppercase" rows="10" value={def} onChange={OnClickChange}></textarea>
                <button disabled={def.length===0} type="button" onClick={ChangeCase} className={`btn btn-${props.color} my-2`}>Upper Case</button>
                <button disabled={def.length===0} type="button" onClick={ChangeLower} className={`btn btn-${props.color} my-2 mx-2`}>Lower Case</button>
                <button disabled={def.length===0} type="button" onClick={ClearText} className={`btn btn-${props.color} my-2`}>Clear Text</button>
                <button disabled={def.length===0} type="button" onClick={CopyToClip} className={`btn btn-${props.color} my-2 mx-2`}>Copy</button>

                <div>
                    <p><b>No of Words : {words} <br /> and no of Charecters : {characters} <br /> Read Time : {(0.008 * nonSpaceCharacters).toFixed(2)} </b>
                    </p>
                </div>
            </div>
        </>
    );
}

TextArea.propTypes = {
    title: PropTypes.string.isRequired,
}
TextArea.defaultProps = {
    title: "Enter Text's",
}