// @flow

import React from "react";
import useForm from "react-hook-form";

function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log("submit", data);
  };

  console.log(watch("username"));

  return (
    <div className="App">
      <div className="w-full max-w-md bg-gray-800">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" bg-white shadow-md rounded px-8 py-8 pt-8"
        >
          <div className="px-4 pb-4">
            <label htmlFor="text" className="text-sm block font-bold  pb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
              placeholder="Johnbull@example.com"
              ref={register({ required: true })}
            />
          </div>
          <div className="px-4 pb-4">
            <label htmlFor="password" className="text-sm block font-bold pb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
              placeholder="Enter your password"
              ref={register({ required: true })}
            />
          </div>
          <div>
            {errors.exampleRequired && <span>This field is required</span>}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
