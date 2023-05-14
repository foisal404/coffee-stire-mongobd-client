import React from "react";
import { useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, suplier, taste, category, details, photo } = coffee;
  return (
    <div className="bg-[#F4F3F0]  py-20">
      <div className="card card-side bg-base-100 shadow-xl p-5   mx-52">
        <figure>
          <img
            src={photo}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{chef}</p>
          <p>{taste}</p>
          <p>{category}</p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
