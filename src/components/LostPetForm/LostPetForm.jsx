import { useDispatch, useSelector } from "react-redux";
import { hideOrShowLostPetForm } from "../../utils/appReducer";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import styles from "./LostPetForm.module.scss";
import { addNewMarker } from "../../utils/dataReducer";

function LostPetForm() {
  const accessToken = process.env.REACT_APP_MAP_ACCESS_TOKEN;
  const map = useSelector((state) => state.app.mapRef);
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(hideOrShowLostPetForm());
  }

  function disableClose(e) {
    e.stopPropagation();
  }

  const newLostPet = {
    type: "Feature",
    category: "Lost",
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
    newLostPet.properties.petType = event.target.value;
  }

  function handlePetName(event) {
    newLostPet.properties.petName = event.target.value;
  }

  function handleOwnerName(event) {
    newLostPet.properties.ownerName = event.target.value;
  }

  function handleOwnerContat(event) {
    newLostPet.properties.ownerContat = event.target.value;
  }

  function handleDescription(event) {
    newLostPet.properties.description = event.target.value;
  }

  function handleLocation(event) {
    const search = `Санкт-Петербург ${event.target.value}`;
    newLostPet.properties.address = event.target.value;
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?access_token=${accessToken}`
    )
      .then((response) => response.json())
      .then((json) => {
        newLostPet.geometry.coordinates = json.features[0].geometry.coordinates;
      });
  }

  function addNewRequest() {
    dispatch(addNewMarker(newLostPet));

    dispatch(hideOrShowLostPetForm());
    map.flyTo({
      center: [
        newLostPet.geometry.coordinates[0],
        newLostPet.geometry.coordinates[1],
      ],
    });
  }

  return (
    <div className={styles.lost_pet_container} onClick={handleClose}>
      <div className={styles.lost_pet} onClick={disableClose}>
        <h4>Lost pet Form</h4>
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

export default LostPetForm;
