import React from "react";
// 49766 48662

const Landing = () => {
    return(
        <div className="container-fluid text-center">
            <h1>Landing</h1>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Species
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <option value="" className="dropdown-item">Monarch</option>
                    <option value="" className="dropdown-item">Zebra Longwing</option>
                </div>
            </div>

        </div>
    )
}

export default Landing;