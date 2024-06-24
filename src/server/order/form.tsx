"use client";

import { useState } from "react";
import { newOrder } from "@/server/db/utils";

export default function OrderForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectDetails: "",
    file: null,
    deliveryAddress: "",
    budget: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({
        ...formData,
        [name]: files ? files[0] : null,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSubmit = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSubmit.append(key, formData[key]);
      });

      const res = await newOrder(formDataToSubmit);
      console.log("Order created successfully.");
      setLoading(false);
    } catch (error) {
      console.error("Error creating order:", error);
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="reservation-form space-y-4 w-full flex flex-col items-center justify-center"
    >
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full border border-black/10 rounded-md p-2 text-black/60 text-sm"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full border border-black/10 rounded-md p-2 text-black/60 text-sm"
        required
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        className="w-full border border-black/10 rounded-md p-2 text-black/60 text-sm"
        required
      />
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="Company Name (if applicable)"
        className="w-full border border-black/10 rounded-md p-2 text-black/60 text-sm"
      />
      <textarea
        name="projectDetails"
        value={formData.projectDetails}
        onChange={handleChange}
        placeholder="Project Details"
        className="w-full border border-black/10 rounded-md p-2 text-black/60 text-sm"
        required
      />
      <input
        type="file"
        name="file"
        onChange={handleChange}
        className="w-full border border-black/10 rounded-md p-2 text-black/60 text-sm"
      />
      <input
        type="text"
        name="deliveryAddress"
        value={formData.deliveryAddress}
        onChange={handleChange}
        placeholder="Delivery Address"
        className="w-full border border-black/10 rounded-md p-2 text-black/60 text-sm"
        required
      />

      <input
        type="text"
        name="budget"
        value={formData.budget}
        onChange={handleChange}
        placeholder="Budget"
        className="w-full border border-black/10 rounded-md p-2 text-black/60 text-sm"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full border border-black bg-black text-white rounded-md p-2  text-sm"
      >
        {loading ? "Loading..." : "Submit"}
      </button>
    </form>
  );
}
