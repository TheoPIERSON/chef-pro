import React from "react";

const NewsletterForm = () => {
  return (
    <form action="" className="grid place-items-center justify-center mt-20">
      <h1 className="font-bold p-8 text-center text-3xl md:text-5xl text-slate-700 h-20 flex items-center">
        Register to be the first to have access to the Chef Pro 360
      </h1>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className=" m-10 p-2 rounded-full text-xl placeholder:text-slate-900 bord duration-300 border-solid border-2 border-slate-400 active:bg-slate-400 focus:bg-slate-400 focus:placeholder:text-white"
      />
      <button
        className="text-white text-center text-2xl md:text-4xl lg:text-5xl drop-shadow-ld bg-slate-700 p-2 pr-4 pl-4 inline-block mx-auto rounded-full duration-300
          hover:text-slate-700 hover:white"
      >
        Register
      </button>
    </form>
  );
};

export default NewsletterForm;
