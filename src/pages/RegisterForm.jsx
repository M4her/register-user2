import axios from "axios";
import React, { useState } from "react";
import { Bounce, toast } from "react-toastify";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: null,
    password: null,
    role: "ADMIN",
    username: null,
  });
  const handleForm = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://api.freeapi.app/api/v1/users/register",
        {
          email: formData.email,
          password: formData.password,
          role: "ADMIN",
          username: formData.username,
        },
        {
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
        }
      )
      .then((res) => {
        toast.success(" Account Created!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          transition: Bounce,
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="w-full h-screen bg-black flex justify-center items-center">
        <div className="w-[500px] h-[700px] px-12 py-10 bg-orange-500 rounded-2xl ">
          <h2 className="text-3xl font-medium font-sans text-black text-center mb-3">
            Create Account
          </h2>
          <form onSubmit={handleForm} className="flex flex-col gap-6 ">
            <div>
              <h2 className="text-white ">UserName</h2>
              <input
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    username: e.target.value,
                  }));
                }}
                className="text-black bg-white border border-gray-400 rounded-2xl py-3 px-2 w-full outline-none"
                type="text"
                name="username"
                placeholder="userName"
              />
            </div>
            <div>
              <h2 className="text-white ">email</h2>
              <input
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, email: e.target.value }));
                }}
                className="text-black bg-white border border-gray-400 rounded-2xl py-3 px-2 w-full outline-none "
                type="email"
                placeholder="email"
              />
            </div>
            <div>
              <h2 className="text-white ">Password</h2>
              <input
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                }}
                className="text-black bg-white border border-gray-400 rounded-2xl py-3 px-2 w-full outline-none "
                type="password"
                placeholder="Password"
              />
            </div>
            {/* <div>
              <h2 className="text-white ">ConfirmPassword</h2>
              <input
                className="text-black bg-white border border-gray-400 rounded-2xl py-3 px-2 w-full outline-none "
                type="password"
                placeholder="ConfirmPassword"
              />
            </div> */}
            <button
              type="submit"
              className="py-2 px-3 bg-black text-white rounded-2xl mt-2 "
            >
              Register
            </button>
          </form>
          <div className="flex justify-end gap-5 mr-2 mt-4 ">
            <h2>Already habe an account?</h2>
            <a className="" href="/">
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
