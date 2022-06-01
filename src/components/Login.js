import React from "react";
import Input from "./commons/Input";

function Login() {
  return (
    <div className="bg-gradient-to-b from-primary-700 to-primary-900 min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-4 bg-white w-full h-screen sm:h-auto sm:w-1/3 p-3 justify-center">
        <h2 className="text-3xl font-body font-bold text-center">Login</h2>
        <div className="flex p-3 w-full">
          <form className="flex flex-col gap-2 w-full">
            <Input label="Username" name="username" placeholder="Username" />
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="********"
            />
            <button className="bg-primary-500 text-white font-body w-fit px-9 py-2 rounded-lg hover:cursor-pointer hover:bg-primary-700 mx-auto my-6">
              Login
            </button>
            <div className="flex justify-between text-sm">
              <p className="text-blue-600 hover:cursor-pointer hover:underline">
                Forgot password?
              </p>
              <p className="text-blue-600 hover:cursor-pointer hover:underline">
                Create account
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
