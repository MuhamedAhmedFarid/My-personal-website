"use client";
import Card from "@/components/Card";
import { useState } from "react";
import { useForm } from "@formspree/react";
import { useRouter } from 'next/navigation';
import {InputField} from "@/components/InputField";
import {LoadingSpinner} from "@/components/LoadingSpinner";
import {Alert} from "@/components/Alert";
import z from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be more than 3 characters")
    .max(20),
  email: z.string().email("Invalid email format"),
  message: z
    .string()
    .min(10, "Message must be more than 10 characters")
    .max(100),
});

const Contact = () => {
  const router = useRouter();
  const [formState, setFormState] = useState({
    error: null,
    errorField: null,
    loading: false,
    succeeded: false
  });
  const [formspreeState] = useForm("mvggvzky");
  const [showAlert, setShowAlert] = useState({ show: false, message: '', type: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, loading: true }));

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const validation = contactSchema.safeParse(data);

    if (!validation.success) {
      const { message, path } = validation.error.errors[0];
      setFormState(prev => ({
        ...prev,
        error: message,
        errorField: path[0],
        loading: false
      }));
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mvggvzky", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (!response.ok) throw new Error("Network response was not ok.");

      setFormState(prev => ({ ...prev, succeeded: true, loading: false }));
      setShowAlert({ show: true, message: 'Message sent successfully!', type: 'success' });
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        error: "Failed to send message",
        loading: false
      }));
      setShowAlert({ show: true, message: 'Failed to send message', type: 'error' });
    }
  };

  const { error, errorField, loading, succeeded } = formState;

  return (
    <div className="h-screen flex justify-center items-center relative">
      {showAlert.show && <Alert message={showAlert.message} type={showAlert.type} />}
      <Card className="w-[400px]">
        <form onSubmit={handleSubmit}>
          <InputField
            label="Name"
            type="text"
            name="name"
            placeholder="Joe Doe"
            error={errorField === "name" ? error : null}
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            placeholder="example@gmail.com"
            error={errorField === "email" ? error : null}
          />
          <InputField
            label="Message"
            type="textarea"
            name="message"
            placeholder="Enter your message here"
            error={errorField === "message" ? error : null}
          />
          <button
            disabled={formspreeState.submitting || loading}
            className={`w-full inline-flex items-center justify-center h-12 mt-4 rounded-xl gap-2 transition-all duration-300 ${
              loading || succeeded
                ? 'bg-emerald-500 text-white'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            {loading ? (
              <>
                <LoadingSpinner />
                Sending...
              </>
            ) : succeeded ? (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Sent!
              </>
            ) : (
              'Submit'
            )}
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Contact;
// import { ContactForm } from "./form";
// function Contact() {
//   return (
//     <div>
//       <ContactForm />
//     </div>
//   )
    
// }

// export default Contact;
