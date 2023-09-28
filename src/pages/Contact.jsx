import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <div className="h-[calc(100vh-90px)] flex justify-center  text-white ">
        <div className="flex flex-col justify-center">
          <h4 className="dark:text-white text-blue-600 dark:text-shadow font-bold my-5 text-3xl text-center">
            Keep in touch
          </h4>
          <div className="flex justify-center h-20 p-5 bg-blue-950 rounded-xl text-5xl ">
            <button>
              <Link to="https://github.com/Amoz19">
                {React.createElement(BsGithub)}
              </Link>
            </button>
            <button className="mx-5">
              <Link to="to:aungmon10co@gmail.com">
                {React.createElement(BiLogoGmail)}
              </Link>
            </button>
            <button>
              <Link to="https://www.linkedin.com/in/aungmon19/">
                {React.createElement(BsLinkedin)}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
