import React from "react";
import { FaEdit, FaRegEye, FaRegWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee,setCoffees,coffees }) => {
  const { _id, name, chef, suplier, taste, category, details, photo } = coffee;
  const handlerDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "Ywant to delete this coffee!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
                const remaining=coffees.filter(cof=>cof._id!==id)
                setCoffees(remaining)
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side bg-[#f5f4f171] shadow-xl">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="card-body">
          <div className="flex  items-center h-full">
            <div className="flex-grow">
              <h2 className="card-title">{name}</h2>
              <p>{details}</p>
              <p>{chef}</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-success">
                <Link to={`/coffees/${_id}`}><FaRegEye /></Link>
              </button>
              <button className="btn btn-dark">
                <Link to={ `/update/${_id}`}><FaEdit /></Link>
              </button>
              <button
                className="btn btn-error"
                onClick={() => handlerDelete(_id)}
              >
                <FaRegWindowClose />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
