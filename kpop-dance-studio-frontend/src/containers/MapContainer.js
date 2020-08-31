import React, { Component } from "react";
import { GoogleMap, withScriptjs, withGoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

// function Map() {
//     return (

//         <GoogleMap 
//             defaultZoom={10}
//             defaultCenter={{lat: 37.5665, lng: 126.9780}}
//         />
//     )
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

class MapContainer extends Component {
    render() {
        return 
            <LoadScript
            googleMapsApiKey=""
          >
              <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
         </LoadScript>     
        
        }
}

export default MapContainer;