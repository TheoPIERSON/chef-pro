"use client";
import React, { useState, FormEvent } from "react";

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean | null>(null); // null = pas de validation encore, true = valide, false = invalide

  const validateEmail = (email: string): boolean => {
    // Expression régulière simple pour valider l'email
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêcher le rafraîchissement de la page
    if (validateEmail(email)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <form id="subscribe" onSubmit={handleSubmit} className="grid place-items-center justify-center mt-32 mb-20">
      <h1 className="font-bold p-8 text-center text-3xl md:text-5xl text-slate-700 h-20 flex items-center">
        Register to be the first to have access to the Chef Pro 360
      </h1>

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="m-10 p-2 rounded-full text-xl placeholder:text-slate-900 duration-300 border-solid border-2 border-slate-400 active:bg-slate-400 focus:bg-slate-400 focus:placeholder:text-white"
      />

      {/* Message d'erreur si l'email est invalide */}
      {isValid === false && <p className="text-red-500 m-2">Please add a valid email address</p>}

      <button
        type="submit"
        className="text-white text-center text-2xl md:text-4xl lg:text-5xl drop-shadow-lg bg-slate-700 p-2 pr-4 pl-4 inline-block mx-auto rounded-full duration-300 hover:text-slate-700 hover:white"
      >
        Register
      </button>

      {/* Message de succès si l'email est valide */}
      {isValid === true && <p className="text-green-500 m-2">Thank you for registering for the Chef Pro 360</p>}
    </form>
  );
};

export default NewsletterForm;
