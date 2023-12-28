import 'leaflet/dist/leaflet.css';
import '../asset/styleMap.css'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import { Icon } from 'leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png"

const Map = () => {
    return (
        <>
            <div className=' w-[100%] flex justify-center items-center mt-10 h-screen md:h-[80vh] '>

                <MapContainer center={[32.6539, 51.6660]}
                    zoom={13}
                    className='leaflet'
                >
                    <TileLayer
                        attribution=''
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[32.6539, 51.6660]}
                        icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}
                    >
                        <Popup>     اصفهان</Popup>
                    </Marker>

                </MapContainer>
            </div>
        </>
    )
}

export default Map