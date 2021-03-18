import React from "react";
import "./App.css";
import ProfileComponent from "./Profile/ProfileComponent";
import ProfilePhoto from "./ProfilePhoto.jpg";
function App() {
    const handleName = (name) => {
        alert(`my name is ${name}`);
    };
    return (
        <div className="firstdiv">
            <ProfileComponent
                fullname="khawla MENSY"
                bio="L'avenir semble clair lorsqu'on a de  confiance en soi-même"
                profession="Ingenieur en chimie industrielle, GoMyCodeStudent"
                handleName={handleName}
            >
                <h1 style={{ color: "red" }}> This is my photo</h1>
                <img src={ProfilePhoto} alt=""></img>
            </ProfileComponent>
        </div>
    );
}

export default App;
