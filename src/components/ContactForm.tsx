
import React, { useState } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const initialState = { name: "", email: "", message: "" };

const ContactForm = () => {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    return (
      form.name.trim().length &&
      /^\S+@\S+\.\S+$/.test(form.email) &&
      form.message.trim().length > 5
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    // For demonstration, EmailJS/FormSubmit API integration would go here.
    setTimeout(() => {
      setForm(initialState);
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3500);
    }, 1200);
  };

  return (
    <section className="py-14 flex flex-col gap-8 max-w-xl mx-auto w-full animate-fade-in" id="contact">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-2">
        Get in Touch
      </h2>
      <form
        className="bg-card border rounded-lg p-8 shadow-lg flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name" className="block font-bold mb-1">
            Name
          </label>
          <input
            className="w-full px-4 py-2 border rounded focus:ring focus:outline-none transition-all text-black"
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
            required
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-bold mb-1">
            Email
          </label>
          <input
            className="w-full px-4 py-2 border rounded focus:ring focus:outline-none transition-all text-black"
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            required
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-bold mb-1">
            Message
          </label>
          <textarea
            className="w-full px-4 py-2 border rounded focus:ring focus:outline-none transition-all text-black"
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={onChange}
            required
            placeholder="How can I help you?"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full mt-2 bg-primary text-primary-foreground px-6 py-2 font-semibold rounded-lg hover:scale-105 transition"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && (
          <div className="w-full text-green-600 text-center mt-2 animate-fade-in">
            Thanks! Message received.
          </div>
        )}
        {status === "error" && (
          <div className="w-full text-red-600 text-center mt-2 animate-fade-in">
            Please fill out all fields correctly!
          </div>
        )}
      </form>
            <div>If The Form is Not Working Please Email Me On The Below Email Address</div>
      <p className="font-bold text-lg">aquibkhan8108@gmail.com</p>
      <div className="flex justify-center gap-7 mt-1 animate-fade-in">
        <a href="https://github.com/KAquib24" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <Github size={30} />
        </a>
        <a href="https://www.linkedin.com/in/khan-aquib/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <Linkedin size={30} />
        </a>
        <a href="https://twitter.com/" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
          <Twitter size={30} />
        </a>
      </div>
    </section>
  );
};

export default ContactForm;

