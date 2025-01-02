"use client";
import Card from "@/components/Card";
import { useState } from "react";
import { useForm } from "@formspree/react";
import { useRouter } from 'next/navigation'
import z from "zod";

const info = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be more than 3 characters" })
    .max(20),
  email: z.string().email({ message: "Invalid email format" }),
  message: z
    .string()
    .min(10, { message: "Message must be more than 10 characters" })
    .max(100),
});

const Contact = () => {
  const router = useRouter()
  const [error, setError] = useState(null);
  const [errorField, setErrorField] = useState(null);
  const [loading, setLoading] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [err, setErr] = useState(null);
  const [state] = useForm("mvggvzky");

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const result = info.safeParse(data);

    if (result.success) {
      fetch("https://formspree.io/f/mvggvzky", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then((data) => {
          setSucceeded(true);
          setLoading(false);
          setTimeout(() => {
            router.push('/')
          }, 1000);
        })
        .catch((error) => {
        
          setErr(error);
          setLoading(false);
          
        });
    } else {
      setError(result.error.errors[0].message);
      setErrorField(result.error.errors[0].path[0]);
      setLoading(false);
    }
  }

  if (state.succeeded) {
    return <p className="text-3xl text-green-200">Thanks for joining!</p>;
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-[400px]">
        <form className="" onSubmit={handleSubmit}>
          <div className="flex flex-col mt-1 text-xs leading-5">
            <label className="block text-gray-500 mb-1 text-xl">Name</label>
            <input
              type="text"
              placeholder="Joe Doe"
              name="name"
              className="w-full rounded-md border text-lg border-white/15 font-medium focus:border-purple-400 outline-none bg-gray-900 py-2 px-4 text-gray-200"
            />
            {errorField === "name" && (
              <p className="text-red-500 text-xs mt-2">{error}</p>
            )}
          </div>
          <div className="flex flex-col mt-1 text-xs leading-5">
            <label className="block text-gray-500 mb-1 text-xl">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className="w-full rounded-md border text-lg border-white/15 font-medium focus:border-purple-400 outline-none bg-gray-900 py-2 px-4 text-gray-200"
            />
            {errorField === "email" && (
              <p className="text-red-500 text-xs mt-2">{error}</p>
            )}
          </div>
          <div className="flex flex-col mt-1 text-xs leading-5">
            <label className="block text-gray-500 mb-1 text-xl">Message</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Enter your message here"
              className="w-full rounded-md border text-lg border-white/15 font-medium focus:border-purple-400 outline-none bg-gray-900 py-2 px-4 text-gray-200"
            />
            {errorField === "message" && (
              <p className="text-red-500 text-xs mt-2">{error}</p>
            )}
          </div>
          <button
            disabled={state.submitting || loading}
            className="text-white bg-gray-900 inline-flex items-center border border-gray-900 px-6 h-12 mt-4 rounded-xl gap-2"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
          {succeeded && (
            <p className="text-green-500 mt-2">
              Message sent successfully. Redirecting back to the home page...
            </p>
          ) }
        </form>
      </Card>
    </div>
  );
};

export default Contact;
