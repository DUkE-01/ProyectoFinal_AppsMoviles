
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const AlberguesMap = () => (
  <MapContainer center={[18.5, -69.9]} zoom={8}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    {AlberguesMap.map(albergue => (
      <Marker key={albergue.id} position={[albergue.lat, albergue.lng]}>
        <Popup>{albergue.nombre}</Popup>
      </Marker>
    ))}
  </MapContainer>
);

export default AlberguesMap; 