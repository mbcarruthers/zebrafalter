import React,{useEffect} from "react";
import { MapContainer, TileLayer, Popup,CircleMarker} from 'react-leaflet'
import {observations} from "../data/observations"
import "../style/MapView.css";

const ZlTid = 49766; // value 'constants' for temporary easeability in testing
const MonarchTid = 48662;

// getEntitiesByTaxonId
// expects: number matching a taxon_id value of an entity observation on the database.
// returns an array of entities matching the taxon_id
// functions purpose is to simulate a database call so I can go ahead and create a control UI
const getEntitiesByTaxonId = (tid) => {
    let entities = [];
    observations.fl_lepidoptera.forEach( (entity) => {
        if(entity.taxon_id === tid) {
            entities = [entity,...entities]
        }
    })
    return entities;
}


// creates observation markers
// expects: an array of entities matching the json struct Entity in helio project
// returns an array of leaflet observation markers made for those entities given as an argument
const createObservationMarkers = (entities) => {
    return entities.map( (entity,idx) => {
        return <CircleMarker center={[entity.latitude,entity.longitude]}
                             color="red"
                             fillColor="#f03"
                             fillOpacity={0.5}
                             radius={5}
                              key={idx}>
            <Popup>
                <small>Locale:entity.place_guess</small><br/>
                <small>entity.species_guess</small><br/>
                <small>Date:entity.observed_on</small><br/>
                <small>Cords:[entity.latitude},entity.longitude]</small>
            </Popup>
        </CircleMarker>
    })

}

const MapView = () => {
   useEffect( () => {
       const circles = createObservationMarkers(getEntitiesByTaxonId(MonarchTid))
       circles.forEach( (circle) => {
           console.log(circle);
       })
   })
    return(
        <MapContainer center={[27.732161, -84.00095]} zoom={6} scrollWheelZoom={true} id="mapview">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {createObservationMarkers(getEntitiesByTaxonId(MonarchTid))}
        </MapContainer>
    )
}

export default MapView;

