
import { MapContainer, TileLayer, Popup,CircleMarker,LayersControl, LayerGroup } from 'react-leaflet'
import MapControls from "./MapControls";


import {observations} from "../data/observations"
import "../style/MapView.css";
import { LocalCache } from '../utility';

const ZlTid = 49766; // value 'constants' for temporary easeability in testing
const MonarchTid = 48662;

// getEntitiesByTaxonId
// expects: number matching a taxon_id value of an entity observation on the database.
// returns an array of entities matching the taxon_id
// functions purpose is to simulate a database call so I can go ahead and create a control UI
const getEntitiesByTaxonId = (tid) => {
    let entities = [];
    LocalCache.get("entities")?.fl_lepidoptera.forEach((entity) => {
        if (entity.taxon_id === tid) {
            entities = [entity, ...entities]
        }
    })
    return entities;
}




// MapView serves as the view for the map component.
// Todo: Remmove all control components, function, etc. into a seperate class
const MapView = () => {
    return(
        <MapContainer center={[27.732161, -84.00095]} zoom={6} scrollWheelZoom={true} id="mapview">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
           <MapControls></MapControls>
        </MapContainer>
    )
}

// const originalControls = () => {
//     return(
//         <LayersControl position="topright"  className="layer-control">
//             <LayersControl.Overlay name="Monarch Observations">
//                 <LayerGroup>
//                     {createObservationMarkers(getEntitiesByTaxonId(MonarchTid))}
//                 </LayerGroup>
//             </LayersControl.Overlay>
//             <LayersControl.Overlay name="Zebra Longwing Observations">
//                 <LayerGroup>
//                     {createObservationMarkers(getEntitiesByTaxonId(ZlTid))}
//                 </LayerGroup>
//             </LayersControl.Overlay>
//         </LayersControl>
//     )
// }

export default MapView;

