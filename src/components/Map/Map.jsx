import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { zoomIn } from "../SVG/zoomIn";
import { zoomOut } from "../SVG/zoomOut";
import { centerLocation } from "../SVG/centerLocation";
import { useSelector } from "react-redux";
import NewRequestForm from "../NewRequestForm/NewRequestForm";

import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./Map.module.scss";
import "./Map.css";

function Map() {
  mapboxgl.accessToken = process.env.REACT_APP_MAP_ACCESS_TOKEN;

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [address, setAddress] = useState("");
  const [adr1, setAdr1] = useState("");
  const [adr2, setAdr2] = useState("");
  const [userLat2, setUserLat2] = useState();
  const [userLng2, setUserLng2] = useState();
  const [lng, setLng] = useState(30.3207);
  const [lat, setLat] = useState(59.9401);
  const [zoom, setZoom] = useState(16);
  const markers = useSelector((state) => state.data.geojson);
  const isNewRequestForm = useSelector(
    (state) => state.app.isNewRequestFormShown
  );

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  function success(pos) {
    const crd = pos.coords;
    // console.log("Ваше текущее местоположение:");
    // console.log(`Широта: ${crd.latitude}`);
    // console.log(`Долгота: ${crd.longitude}`);
    // console.log(`Плюс-минус ${crd.accuracy} метров.`);
    setUserLat2(crd.latitude);
    setUserLng2(crd.longitude);
    setLat(crd.latitude);
    setLng(crd.longitude);
    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [crd.longitude, crd.latitude],
        zoom: zoom,
      });
    }

    for (const feature of markers.features) {
      // create a HTML element for each feature
      const el = document.createElement("div");
      el.className = styles.marker;

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(feature.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              `
              <h3>Pet type: ${feature.properties.petType}</h3>
              <p>Pet name: ${feature.properties.petName}</p>
              <p>Owner name: ${feature.properties.ownerName}</p>
              <p>Owner contact: ${feature.properties.ownerContat}</p>
              <p>Description: ${feature.properties.description}</p>
              `
            )
        )
        .addTo(map.current);
    }
  }

  useEffect(() => {
    navigator.permissions &&
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (PermissionStatus) {
          if (PermissionStatus.state === "denied") {
            map.current = new mapboxgl.Map({
              container: mapContainer.current,
              style: "mapbox://styles/mapbox/dark-v10",
              center: [30.3609, 59.9311],
              zoom: 15,
            });
          } else {
            if (map.current) return;
            try {
              navigator.geolocation.getCurrentPosition(success, error, options);
            } catch (e) {
              console.log(e.message);
            }
          }
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

  useEffect(() => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${mapboxgl.accessToken}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAdr1(data.features[0]?.text ?? "");
        setAdr2(data.features[0]?.address ?? "");
        if (!adr1 && !adr2) {
          setAddress("Can't define place");
        }
        setAddress(adr1 + " " + adr2);
      });
  }, [lat, lng, adr1, adr2, userLat2, userLng2]);

  function setZoomIn() {
    map.current.zoomIn({ duration: 1000 });
  }

  function setZoomOut() {
    map.current.zoomOut({ duration: 1000 });
  }

  function centerMap() {
    map.current.flyTo({ center: [userLng2, userLat2] });
  }
  return (
    <div>
      <div className={styles.map_buttons}>
        <button className={styles.button} onClick={setZoomIn}>
          {zoomIn}
        </button>
        <button className={styles.button} onClick={setZoomOut}>
          {zoomOut}
        </button>
        <button
          className={styles.button + " " + styles.center_button}
          onClick={centerMap}
        >
          {centerLocation}
        </button>
      </div>
      <div className={styles.sidebar}>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom} | Address: {address}
      </div>
      {isNewRequestForm && <NewRequestForm></NewRequestForm>}
      <div ref={mapContainer} className={styles.map} />
    </div>
  );
}

export default Map;
