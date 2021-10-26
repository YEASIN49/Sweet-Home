import React from 'react';
 import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"



const WrappedMap = withScriptjs(withGoogleMap((props) =>
	<GoogleMap
		defaultZoom={15}
		defaultCenter={{ lat: 23.762349, lng: 90.415516 }}
	>
  {props.isMarkerShown && <Marker position={{ lat: 23.762349, lng: 90.415516 }} />}
	</GoogleMap>
))


const  Map = () => {
	return(
		<div style={{width: '100%', height: '100%'}}>
			<WrappedMap 
				isMarkerShown
				googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `400px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		</div>
	);
};

export default Map;