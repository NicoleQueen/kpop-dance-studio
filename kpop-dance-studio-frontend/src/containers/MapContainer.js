import React from "react";
import { withGoogleMap,  withScriptjs, GoogleMap, Marker} from "react-google-maps";


function Map() {
    return <GoogleMap
    defaultZoom={10}
    defaultCenter={{lat: 37.5665, lng: 126.9780}}
  >
    <Marker
    //   defaultPosition={props.center}
    position={{lat: 37.541534, lng: 127.057302}}
      title="Click to zoom"
      icon={{
        url: "/path/to/custom_icon.png",
        // anchor: new google.maps.Point(32,32),
        // scaledSize: new google.maps.Size(64,64)
      }}
    //   onClick={props.onMarkerClick}
    />

    {/* <Marker
      defaultPosition={props.marker2center}
      title="Click to zoom"
      onClick={props.onMarkerClick}
    />  */}



  </GoogleMap>
}

const WrappedMap = withScriptjs(withGoogleMap(Map))


{/* const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox"); */}


export default function MapContainer () {
  
    // console.log(process.env.REACT_APP_GOOGLE_KEY)
        return <div style={{width:'75vw', height: '100vh'}}>
            
            <WrappedMap 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
            loadingElement={<div style={{ height: `100%` }} />} 
            containerElement={<div style={{ height: `400px` }} />} 
            mapElement={<div style={{ height: `100%` }} />} 
            />
        
            </div>;
        
        
}


   
