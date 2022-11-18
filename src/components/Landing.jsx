import React from "react";


const Landing = () => {
    const handleDefaultGetRequest = () => {
        let url = "\/\/localhost:8000/entities/"
        let request = {
            Method:"GET",
        }
        fetch(url,request)
            .then((res) => res.json())
            .then(data => console.log(data))
            .catch((err) => console.log(err));
    }
    return(
        <div className="container-fluid text-center">
            <h1>Landing</h1>
            <button onClick={handleDefaultGetRequest}>Get Data</button>
        </div>
    )
}

export default Landing;