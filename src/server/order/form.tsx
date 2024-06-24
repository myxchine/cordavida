"use client";

import { useState } from "react";
import { newOrder } from "@/server/db/utils";

export default function OrderForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = formData;

    setLoading(true);

    try {
      const res = await newOrder({
        name,
        email,
        message,
      });

      console.log("Reservation created successfully.");
    } catch (error) {
      console.error("Error creating reservation:", error);
      setLoading(false); // Ensure loading state is updated on error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="reservation-form space-y-4 w-full">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input type="hidden" name="message" value={formData.message} />
      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Submit"}
      </button>
    </form>
  );
}
