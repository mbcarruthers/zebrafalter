import {observations} from "../data/observations.js";
import React, {useEffect} from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../style/MapView.css"
const MapView = () => {

    const createObservationMarkers = () => {
        const fl_observations = observations.fl_lepidoptera.map((entity) => {
            const observationMarker = L.circleMarker([entity.latitude, entity.longitude], {
                color: "red",
                fillColor: "#f03",
                fillOpacity: 0.5,
                radius: 5,
            })
            observationMarker.bindPopup(`<small>Locale:${entity.place_guess}</small><br>
                                        <small>${entity.species_guess}</small><br/>
                                        <small>Date:${entity.observed_on}</small><br/>
                                        <small>Cords:[${entity.latitude},${entity.longitude}</small>`)
            observationMarker.addEventListener("onmouseover", (e) => {
                console.log(`value of ${e} visible: ${e.visible}`);
            })
            return observationMarker;
        })
        return fl_observations;
    }

    useEffect(() => {
        let map = L.map("mapview").setView([27.732161, -84.00095], 6);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map)

        createObservationMarkers().forEach((entity) => {
            //Todo: add event Listener
            entity.addTo(map)
        });

        return () => {
            map.remove();
        }
    })


    return(
        <div id="mapview" className="">

        </div>
    )
}

export default MapView;

