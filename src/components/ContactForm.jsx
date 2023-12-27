import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <form className=" mx-auto mt-8" onSubmit={handleSubmit}>
      <div className=" flex items-center gap-6 mb-4">

      <div className="mb-4">
        <label htmlFor="firstName" className="block text-gray-700 text-xl font-bold mb-2">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-2 focus:outline-none  rounded bg-[#0000000A]"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-gray-700 font-bold text-xl mb-2">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-2 focus:outline-none  rounded bg-[#0000000A]"
          required
        />
      </div>
      </div>
    



      <div className="mb-8">
        <label htmlFor="email" className="block text-gray-700 text-xl font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 focus:outline-none  rounded bg-[#0000000A]"
          required
        />
      </div>

      <div className="my-8">
        <label htmlFor="message" className="block text-gray-700 text-xl font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 focus:outline-none  rounded bg-[#0000000A]"
          rows="4"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;