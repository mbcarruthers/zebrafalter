import React from "react";
import Control from "react-leaflet-custom-control";
import "../style/MapView.css";
import {CircleMarker, Popup} from "react-leaflet";
import axios from "axios";

// creates observation markers
// expects: an array of entities matching the json struct Entity in helio project
// returns an array of leaflet observation markers made for those entities given as an argument
const createObservationMarkers = (entities) => {
    return entities.map( (entity,idx) => {
        let _link = `https://www.inaturalist.org/observations/${entity.id}`;
        return <CircleMarker center={[entity.latitude,entity.longitude]}
                             color="red"
                             fillColor="#f03"
                             fillOpacity={0.5}
                             radius={5}
                             key={idx}>
            <Popup className="popup">
                <small className="">Locale:{entity.place_guess}</small><br/>
                <small>{entity.species_guess}</small><br/>
                <small>Date:{entity.observed_on}</small><br/>
                <small><a href={_link}>iNaturalist</a></small>
            </Popup>
        </CircleMarker>
    })
}

// Note: Route  /entities/search?taxon_id=XXX&date1=yy-nn-dd&date2=yy-mm-dd


const MapControls = () => {
  const handleSubmitDate = () => {
      const date1 = document.getElementById("date1");
      const date2 = document.getElementById("date2")
      console.log(date1.value);
      console.log(date2.value);
      fetch(`\/\/localhost:8000/entities/search?taxon_id=48662&date1="${date1}"&date2=${date2}`)
          .then((res) => res.json())
          .then((entities) => {

          }).catch((err) => console.log(err));
  }

    return(
        <Control prepend position="topright">
            <div className="form-group date-input-group">
                <label htmlFor="date1" >Start date</label>
                <input type="date" id="date1" aria-valuemin={2012-1-1} aria-valuemax={2022-12-31}/>
                <label htmlFor="date2">End date</label>
                <input type="date" id="date2" aria-valuemin="2012-01-01" aria-valuemax="2022-12-31"/>
                <button className="btn" id="date-submit-button" onClick={handleSubmitDate}>Submit Dates</button>
            </div>
        </Control>
    )

};
export default MapControls;