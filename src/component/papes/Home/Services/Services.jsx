import React from "react";
import "./services.css";
import Serviceshouse from "./Serviceshouse";
import Servicesindustrial from "./Servicesindustrial";
import Servicesoto from "./Servicesoto";

export default function Services() {
  return (
    <div>
      <div className="services">
        <div className="row g-0 ">
          <Servicesindustrial />
          <Servicesoto />
          <Serviceshouse />
        </div>
      </div>
    </div>
  );
}
