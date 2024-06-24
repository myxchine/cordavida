"use client";

import React, { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      message: event.target.elements.message.value,
    };

    console.log("Form Data:", formData);

    // Simulate a 1-second delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-black/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind? Contact us to discuss how Cordavida can
              help bring your vision to life.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="max-w-lg flex-1 p-2 rounded-md border border-gray-300 bg-white "
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="max-w-lg flex-1 p-2 rounded-md border border-gray-300 bg-white"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className="max-w-lg flex-1 p-2 rounded-md border border-gray-300 bg-white"
                required
              />
              <button
                type="submit"
                className={`bg-black border border-black text-sm font-medium rounded-md text-white p-2 text-center px-4 w-full ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex justify-center items-center space-x-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C6.477 0 0 6.477 0 14h4zm2 5.291A7.963 7.963 0 014 12H0c0 4.411 3.589 8 8 8v-4.709z"
                      ></path>
                    </svg>
                    <span>Submitting...</span>
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
            {isSuccess && (
              <div className="text-black/60 pt-4">
                Form submitted successfully!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
