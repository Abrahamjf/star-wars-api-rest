import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const VehicleCard = (props) => {
  const { store, actions } = useContext(Context);
  const { vehicles } = props;
  console.log(vehicles);
  return (
    <div className="d-flex container m-5">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={`https://starwars-visualguide.com/assets/img/vehicles/${props.vehicles.uid}.jpg`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{vehicles?.properties?.model}</h5>
          <p className="card-text">
            <strong>Manufacturer:</strong> {vehicles?.properties?.manufacturer}
            <br></br>
            <strong>Model:</strong> {vehicles?.properties?.model}
            <br></br>
            <strong>Crew:</strong> {vehicles?.properties?.crew}
            <br></br>
            <strong>Passengers:</strong> {props.properties?.passengers}
          </p>
          <Link
            to={`/Vehicle/${props.vehicles?.uid}`}
            className="btn btn-outline-primary"
          >
            Learn more!
          </Link>
          <a
            href="#"
            className="btn btn-outline-warning amarillo"
            onClick={(event) => actions.toggleFavorite(props.vehicles)}
          >
            <i
              className={
                actions.isFavorite(props.vehicles?.name) == undefined
                  ? "far fa-heart"
                  : "fas fa-heart"
              }
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};
