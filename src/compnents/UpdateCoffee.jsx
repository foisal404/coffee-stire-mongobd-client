import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee=useLoaderData();
    const { _id, name, chef, suplier, taste, category, details, photo } = coffee;
    
    const handlerForm=event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const photo = form.photo.value;
        const taste = form.taste.value;
        const suplier = form.suplier.value;
        const details = form.details.value;
        const category = form.category.value;
        const coffee = { name, chef, suplier, taste, category, details, photo };
        console.log(coffee);
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to update!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/update/${_id}`,{
                    method:"PUT",
                    headers:{
                        "content-type":"application/json"
                    },
                    body: JSON.stringify(coffee)
                })
                .then(res=>res.json)
                .then(data=>{
                    console.log(data);
                    Swal.fire(
                        'Updates!',
                        'success'
                      )
                })
              
              
            }
          })
    }
  return (
    <div>
      <section className="bg-[#F4F3F0]">
        <h2 className="text-center text-5xl ">Update {name}  Coffee Details</h2>
        <form className="w-full px-10 p-5" onSubmit={handlerForm}>
          <div className="w-full px-10 p-5">
            <div className="grid grid-cols-2  w-full">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Coffee Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Enter Coffee Name"
                />
              </div>
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  chef
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="text"
                  name="chef"
                  defaultValue={chef}
                  placeholder="Enter Coffee Chef"
                />
              </div>
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Suplier
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="text"
                  name="suplier"
                  defaultValue={suplier}
                  placeholder="Enter Coffee Suplier"
                />
              </div>
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Taste
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="text"
                  defaultValue={taste}
                  name="taste"
                  placeholder="Enter Coffee Taste"
                />
              </div>
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Category
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="text"
                  defaultValue={category}
                  name="category"
                  placeholder="Enter Coffee Category"
                />
              </div>
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Details
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  name="details"
                  defaultValue={details}
                  type="text"
                  placeholder="Enter Coffee Details"
                />
              </div>
            </div>
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Photo Url
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Enter Photo URL"
              />
            </div>
            <button type="submit" className="btn btn-block p-3 px-12">
             Update Coffee
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateCoffee;
