import React from "react";

const CreateService = () => {
    const handleServiceAdd = (e) => {
        e.preventDefault();
        const form = e.target;
        const service_name = form.service_name.value;
        const service_img = form.service_img.value;
        const short_description = form.short_description.value;
        const price = form.price.value;
        const duration = form.duration.value;
        const service = {
            service_name,
            service_img,
            short_description,
            price,
            duration
        }
        console.log(service)
        fetch('http://localhost:5000/doctors',{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            } )
    }
  return (
    <div className="px-10">
      <form onSubmit={handleServiceAdd}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Service Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="service_name"
            type="text"
            placeholder="Enter service name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
            Service Image
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            name="service_img"
            type="text"
            placeholder="Enter service image URL"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="description"
          >
            Short Description
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="short_description"
            rows="3"
            placeholder="Enter short description"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            name="price"
            type="text"
            placeholder="Enter price"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="duration"
          >
            Duration
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="duration"
            name="duration"
            type="text"
            placeholder="Enter duration"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Service
        </button>
      </form>
    </div>
  );
};

export default CreateService;
