import { BsFacebook, BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="p-5 shadow-black shadow-2xl flex justify-between">
      <h3 className="font-medium text-indigo-900">
        Copyright © 2023
        <a
          className="px-2 no-underline hover:underline underline-offset-4"
          href="https://abdelwahab-hamadouche.netlify.app/"
          target="_blank"
        >
          Abdelwahab Hamadouche
        </a>
        , design inspired by clipchamp.com
      </h3>
      <div className="flex gap-6 text-2xl text-indigo-900 px-10">
        <a
          href="https://www.linkedin.com/in/abdelwahab-hamadouche"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://www.facebook.com/abdelwahab.hamadouche"
          target="_blank"
        >
          <BsFacebook />
        </a>
        <a href="https://github.com/kinof28" target="_blank">
          <BsGithub />
        </a>
        <a href="https://www.youtube.com/@CodewithWahab" target="_blank">
          <BsYoutube />
        </a>
      </div>
    </div>
  );
};

export default Footer;
