import { MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

const iconPin = L.icon({ iconUrl: "/images/locationPin.svg" })

const iconTrain = L.icon({
    iconUrl: "/images/train.png",
    iconSize: [30, 30]
})

const blueOptions = { color: 'blue' }

const multiPolyline: [number, number][][] = [
    [
        [49.194308, -123.178474],
        [49.193053, -123.157851],
        [49.196670, -123.146570],
        [49.195535, -123.125904],
        [49.198003, -123.120293],
        [49.200037, -123.118070],
        [49.209785, -123.117073],
        [49.225737, -123.116569],
        [49.232943, -123.116271],
        [49.248556, -123.115027],
        [49.262731, -123.114815],
        [49.266570, -123.114801],
        [49.274577, -123.122014],
        [49.286603, -123.113122],
    ],
    [
        [49.168295, -123.136345],
        [49.173716, -123.136355],
        [49.184448, -123.136286],
        [49.195535, -123.125904]
    ]
]

const Map = () => {
    return (

        <MapContainer
            style={{ height: "100vh" }}
            center={[49.194308, -123.178474]} zoom={14} scrollWheelZoom={false}
        >

            <Polyline pathOptions={blueOptions} positions={multiPolyline} />


            <Marker position={[49.194308, -123.178474]} icon={iconTrain}>
                <Popup>
                    YVR Airport
                </Popup>
            </Marker>
            <Marker position={[49.193053, -123.157851]} icon={iconTrain}>
                <Popup>
                    Sea Island Center
                </Popup>
            </Marker>
            <Marker position={[49.196670, -123.146570]} icon={iconTrain}>
                <Popup>
                    Templeton
                </Popup>
            </Marker>
            <Marker position={[49.195535, -123.125904]} icon={iconTrain}>
                <Popup>
                    Bridgeport
                </Popup>
            </Marker>
            <Marker position={[49.209785, -123.117073]} icon={iconTrain}>
                <Popup>
                    Marine Drive
                </Popup>
            </Marker>
            <Marker position={[49.225737, -123.116569]} icon={iconTrain}>
                <Popup>
                    Langara-49th Avenue
                </Popup>
            </Marker>
            <Marker position={[49.232943, -123.116271]} icon={iconTrain}>
                <Popup>
                    Oakridge-41st Avenue
                </Popup>
            </Marker>
            <Marker position={[49.248556, -123.115027]} icon={iconTrain}>
                <Popup>
                    King Edward
                </Popup>
            </Marker>
            <Marker position={[49.262731, -123.114815]} icon={iconTrain}>
                <Popup>
                    Broadway-city Hall
                </Popup>
            </Marker>
            <Marker position={[49.266570, -123.114801]} icon={iconTrain}>
                <Popup>
                    Olymic Village
                </Popup>
            </Marker>
            <Marker position={[49.274577, -123.122014]} icon={iconTrain}>
                <Popup>
                    Yaletown-Roundhouse
                </Popup>
            </Marker>
            <Marker position={[49.286603, -123.113122]} icon={iconTrain}>
                <Popup>
                    Waterfront
                </Popup>
            </Marker>
            <Marker position={[49.168295, -123.136345]} icon={iconTrain}>
                <Popup>
                    Richmond Brighouse
                </Popup>
            </Marker>
            <Marker position={[49.173716, -123.136355]} icon={iconTrain}>
                <Popup>
                    Lansdowne
                </Popup>
            </Marker>
            <Marker position={[49.184448, -123.136286]} icon={iconTrain}>
                <Popup>
                    Aberdeen
                </Popup>
            </Marker>

            <TileLayer
                attribution='&copy; <a href = "https://github.com/Meelaud/leaflet-map.git"> By Meelaud </a> contributors'
                url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}

export default Map;