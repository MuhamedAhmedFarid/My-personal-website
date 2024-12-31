"use client";
import Card from "@/components/Card";
import { useState } from "react";
import z from "zod";
const info = z.object({
  name: z.string().min(3, 'name must more than 3 letter').max(10),
  email: z.string().email(),
  message: z.string().min(10, 'message must more than 10 letter').max(100),
});

const Contact = () => {
  const [error, setError] = useState(null);
  const [errorField, setErrorField] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    try {
      info.parse(data);
      setError(null)
    } catch (error) {
      setError(error.errors[0].message);
      setErrorField(error.errors[0].path[0]);
      
    }
  }
  function handleInputChange(e) {
    setError(null)
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-[400px]">
        <form className="" onSubmit={handleSubmit}>
          <div className="flex flex-col mt-1 text-xs leading-5">
            <label className="block text-gray-500 mb-1 text-xl">name</label>
            <input
            onChange={handleInputChange}
              type="text"
              placeholder="Joe Doe"
              name="name"
              className="w-full rounded-md border text-lg border-white/15 font-medium focus:border-purple-400 outline-none bg-gray-900 py-2 px-4 text-gray-200"
            />
            {errorField === 'name' && <p className="text-red-500 text-xs mt-2">{error}</p>}
          </div>
          <div className="flex flex-col mt-1 text-xs leading-5">
            <label className="block text-gray-500 mb-1 text-xl">email</label>
            <input
                onChange={handleInputChange}
              type="email"
              name="email"
              placeholder="exmple@gmail.com"
              className="w-full rounded-md border text-lg border-white/15 font-medium focus:border-purple-400 outline-none bg-gray-900 py-2 px-4 text-gray-200"
            />
            {errorField === 'email' && <p className="text-red-500 text-xs mt-2">{error}</p>}
          </div>
          <div className="flex flex-col mt-1 text-xs leading-5">
            <label className="block text-gray-500 mb-1 text-xl">email</label>
            <textarea
            onChange={handleInputChange}
              type="textarea"
              name="message"
              rows={4}
              placeholder="Enter your message here"
              className="w-full rounded-md border text-lg border-white/15 font-medium focus:border-purple-400 outline-none bg-gray-900 py-2 px-4 text-gray-200"
            />
            {errorField === 'message' && <p className="text-red-500 text-xs mt-2">{error}</p>}
          </div>
          <button className="text-white bg-gray-900 inline-flex items-center border border-gray-900 px-6 h-12 mt-4 rounded-xl gap-2">
            <span className="font-semibold w-max">Submit</span>
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Contact;
