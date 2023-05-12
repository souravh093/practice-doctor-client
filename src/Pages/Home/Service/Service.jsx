import React from "react";

const Service = ({ service }) => {
    const {service_name, service_img, short_description, price, duration} = service;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src={service_img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service_name}</h2>
        <p>{short_description}</p>
        <p>Price: ${price}</p>
        <p>Duration: {duration}min</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Service;