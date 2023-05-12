import React from "react";
import Banner from "./Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Service from "./Service/Service";

const Home = () => {
  const doctorsServices = useLoaderData();
  return (
    <div>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center my-10">
          <h2 className="text-6xl font-bold">Our Services</h2>
          <p className="font-medium mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            exercitationem!
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {doctorsServices.map((service) => (
            <Service key={service._id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
