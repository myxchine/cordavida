"use client";

import { useState } from "react";
import { newOrder } from "@/server/db/utils";
import { transform } from "next/dist/build/swc";

export default function OrderForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectDetails: "",
    file: null,
  });
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setFileName(file.name);
    // Do something with the file
  };
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
      <div className="w-full flex flex-col items-center justify-center bg-white">
        <input
          type="file"
          name="file"
          onChange={handleFileChange}
          id="fileInput"
          className="hidden"
        />
        <label
          htmlFor="fileInput"
          className="cursor-pointer flex flex-row items-center gap-1 w-full  p-2 border border-black/10  rounded-md text-center text-sm w-full flex flex-col items-center justify-center bg-white"
        >
          {fileName ? (
            <span className="ml-2 text-sm text-black/60">{fileName}</span>
          ) : (
            <span className="text-sm text-black/60">Select a file</span>
          )}
        </label>
      </div>

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

export function AddIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
}
