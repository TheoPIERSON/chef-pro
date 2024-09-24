import React from "react";

const Footer = () => {
  return (
    <section id="footer">
      <ul className="grid md:flex justify-around mt-20 mb-10">
        <li className="mb-5">
          <h2 className="font-bold">Contacts</h2>
          <p>thheopierson@gmail.com</p>
          <p>
            <a className="hover:underline" href="http://theo-pierson.vercel.app">
              Portfolio
            </a>
          </p>
        </li>
        <li>
          <h2 className="font-bold">Socials</h2>
          <p>
            <a href="https://www.linkedin.com/in/theo-pierson-5bab87216/">LinkedIn</a>
          </p>
          <p>
            <a href="https://github.com/TheoPIERSON">Github</a>
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
