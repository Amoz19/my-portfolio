import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import Button from "../components/Button";
const Contact = () => {
  return (
    <>
      <div className="h-[calc(100vh-90px)] flex justify-center  text-white ">
        <div className="flex flex-col justify-center">
          <h4 className="dark:text-white text-blue-600 dark:text-shadow font-bold my-5 text-3xl text-center">
            Reach me out
          </h4>
          <div className="flex justify-between h-20 p-5 bg-blue-950 rounded-xl text-5xl ">
            <Button
              handleClick={() => window.open("https://github.com/Amoz19")}
            >
              {React.createElement(BsGithub)}
            </Button>
            <Button
              handleClick={() =>
                window.open("https://www.linkedin.com/in/aungmon19/")
              }
            >
              {React.createElement(BiLogoGmail)}
            </Button>
            <Button handleClick={() => window.open("to:aungmon10co@gmail.com")}>
              {" "}
              {React.createElement(BsLinkedin)}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
