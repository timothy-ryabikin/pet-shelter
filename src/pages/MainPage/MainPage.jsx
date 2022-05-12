import Header from "../../components/Header/Header";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./MainPage.module.scss";

function MainPage() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoidGltYWExMjMiLCJhIjoiY2t4MXNmZzVtMDEwNDJvbnhyNHByZWlzdyJ9.oMtL_4Qj7bSnF-pxB2AZ7g";

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(30.3207);
  const [lat, setLat] = useState(59.9401);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div className={styles.main}>
      <Header></Header>
      <div>
        <div className={styles.sidebar}>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div ref={mapContainer} className={styles.map} />
      </div>
    </div>
  );
}

export default MainPage;
