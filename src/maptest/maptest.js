import React, { useState, useCallback } from 'react'
import MapGL, {Marker, NavigationControl} from 'react-map-gl';
import Pin from './pin';
import ControlPanel from './control-panel';

const maptest = () => {
    const navStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        padding: '10px'
    };      

    const [viewport, setViewport] = useState({
        latitude: 40,
        longitude: -100,
        zoom: 3.5,
        bearing: 0,
        pitch: 0
    });
    
    const [marker, setMarker] = useState({
        latitude: 40,
        longitude: -100
    });

    const [events, logEvents] = useState({});
    
    const onMarkerDragStart = useCallback(event => {
        logEvents(_events => ({..._events, onDragStart: event.lngLat}));
    }, []);
    
    const onMarkerDrag = useCallback(event => {
        logEvents(_events => ({..._events, onDrag: event.lngLat}));
    }, []);
    
    const onMarkerDragEnd = useCallback(event => {
        logEvents(_events => ({..._events, onDragEnd: event.lngLat}));
        setMarker({
            longitude: event.lngLat[0],
            latitude: event.lngLat[1]
        });
    }, []);

    const MAPBOX_TOKEN = 'pk.eyJ1IjoieW91a3ZuIiwiYSI6ImNrdnlxd2k4bzRzcDUybnRrYWhucmlibGMifQ.YgRcw2T-czE0vjbxfP18Hw';

    return (
        <div>
            <MapGL
                {...viewport}
                width="100vh"
                height="100vh"
                mapStyle="mapbox://styles/mapbox/dark-v9"
                onViewportChange={setViewport}
                mapboxApiAccessToken={MAPBOX_TOKEN}
            >
            <Marker
                longitude={marker.longitude}
                latitude={marker.latitude}
                offsetTop={-20}
                offsetLeft={-10}
                draggable
                onDragStart={onMarkerDragStart}
                onDrag={onMarkerDrag}
                onDragEnd={onMarkerDragEnd}
            >
            <Pin size={20} />
            </Marker>

            <div className="nav" style={navStyle}>
                <NavigationControl />
            </div>
            </MapGL>
            <ControlPanel events={events} />
        </div>
    )
}

export default maptest
