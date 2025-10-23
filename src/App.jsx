import React from "react";

const App = () => {
  const handleForm = (e)=>{
    e.preventDefault()
  }
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
                className="text-black bg-white border border-gray-400 rounded-2xl py-3 px-2 w-full outline-none"
                type="text"
                placeholder="userName"
              />
            </div>
            <div>
              <h2 className="text-white ">email</h2>
              <input
                className="text-black bg-white border border-gray-400 rounded-2xl py-3 px-2 w-full outline-none "
                type="email"
                placeholder="email"
              />
            </div>
            <div>
              <h2 className="text-white ">Password</h2>
              <input
                className="text-black bg-white border border-gray-400 rounded-2xl py-3 px-2 w-full outline-none "
                type="password"
                placeholder="Password"
              />
            </div>
            <div>
              <h2 className="text-white ">ConfirmPassword</h2>
              <input
                className="text-black bg-white border border-gray-400 rounded-2xl py-3 px-2 w-full outline-none "
                type="password"
                placeholder="ConfirmPassword"
              />
            </div>
            <button type="submit" className="py-2 px-3 bg-black text-white rounded-2xl mt-2 ">
              Register

            </button>
           
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
