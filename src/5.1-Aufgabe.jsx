import React, { useState, useEffect } from "react";
import './App.css';

function App() {
    const [name, setName] = useState("Hagmann");
    const [surname, setSurname] = useState("Stephan");
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    useEffect(() => {
        document.title = name + " " + surname
    })

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSurnameChange = (event) => {
        setSurname(event.target.value);
    };

    return (
        <div>
            <label for="name">Name: </label>
            <input type="text" value={name} id="name" onChange={handleNameChange}></input> <p />
            <label for="surname">Surname: </label>
            <input type="text" value={surname} id="name" onChange={handleSurnameChange}></input> <p />
            <label for="windowWidth">Window-Width: </label>
            <input type="text" value={windowWidth} id="windowWidth"></input> <p />
        </div>
        
    )
}

export default App;
