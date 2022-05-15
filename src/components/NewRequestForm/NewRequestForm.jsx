import { useDispatch, useSelector } from "react-redux";
import { hideOrShowNewRequestForm } from "../../utils/appReducer";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { addNewMarker } from "../../utils/dataReducer";

import styles from "./NewRequestForm.module.scss";

function NewRequestForm() {
  const accessToken = process.env.REACT_APP_MAP_ACCESS_TOKEN;
  const map = useSelector((state) => state.app.mapRef);
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(hideOrShowNewRequestForm());
  }

  function disableClose(e) {
    e.stopPropagation();
  }

  const newRequest = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [],
    },
    properties: {
      petType: "",
      petName: "",
      ownerName: "",
      ownerContat: "",
      description: "",
      address: "",
    },
  };

  function handlePetType(event) {
    newRequest.properties.petType = event.target.value;
  }

  function handlePetName(event) {
    newRequest.properties.petName = event.target.value;
  }

  function handleOwnerName(event) {
    newRequest.properties.ownerName = event.target.value;
  }

  function handleOwnerContat(event) {
    newRequest.properties.ownerContat = event.target.value;
  }

  function handleDescription(event) {
    newRequest.properties.description = event.target.value;
  }

  function handleLocation(event) {
    const search = `Санкт-Петербург ${event.target.value}`;
    newRequest.properties.address = event.target.value;
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?access_token=${accessToken}`
    )
      .then((response) => response.json())
      .then((json) => {
        newRequest.geometry.coordinates = json.features[0].geometry.coordinates;
      });
  }

  function addNewRequest() {
    dispatch(addNewMarker(newRequest));

    dispatch(hideOrShowNewRequestForm());
    map.flyTo({
      center: [
        newRequest.geometry.coordinates[0],
        newRequest.geometry.coordinates[1],
      ],
    });
  }

  return (
    <div className={styles.new_form_container} onClick={handleClose}>
      <div className={styles.new_form} onClick={disableClose}>
        <h4>New Request Form</h4>
        <TextField
          label="Pet type"
          variant="outlined"
          onChange={handlePetType}
        />
        <TextField
          label="Pet name"
          variant="outlined"
          onChange={handlePetName}
        />
        <TextField
          label="Your name"
          variant="outlined"
          onChange={handleOwnerName}
        />
        <TextField
          label="Number"
          variant="outlined"
          onChange={handleOwnerContat}
        />
        <TextField
          label="Location"
          variant="outlined"
          onChange={handleLocation}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Description"
          multiline
          maxRows={4}
          onChange={handleDescription}
        />
        <Button color="success" variant="contained" onClick={addNewRequest}>
          Confirm
        </Button>
      </div>
    </div>
  );
}

export default NewRequestForm;
