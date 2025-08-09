'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useEffect, useState } from 'react';

const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export default function MapPage(){
  const [items, setItems] = useState<any[]>([]);
  useEffect(()=>{ fetch('/api/storage/listings').then(r=>r.json()).then(setItems); },[]);
  return (
    <div style={{height:'calc(100vh - 80px)', padding:8}}>
      <MapContainer center={[33.35, -111.8]} zoom={11} style={{height:'100%', border:"1px solid #222a3a", borderRadius:12}}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {items.map((s:any)=>(
          <Marker key={s.id} position={[s.host.lat, s.host.lon]} icon={markerIcon}>
            <Popup>
              <b>{s.title}</b><br/>{s.host.city}, {s.host.state}<br/>${s.priceMonthly}/mo
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
