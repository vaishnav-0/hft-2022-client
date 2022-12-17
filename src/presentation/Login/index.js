import React from "react";

const Login = () => {
  return (
    <div className="h-full min-h-full bg-gradient-to-tl from-white-400 to-indigo-900 w-full py-64 px-4">
      <div className="flex flex-col items-center justify-center">
        <h2 className=" font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#3F63F4] to-[#0A0C2B]">
          Be Clean
        </h2>
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <p
            tabIndex={0}
            className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
          >
            Login to your account
          </p>
          <p
            tabIndex={0}
            className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
          >
            Dont have account?{" "}
            <a
              href="fdsafdsfs"
              className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"
            >
              {" "}
              Sign up here
            </a>
          </p>
          <button
            aria-label="Continue with google"
            role="button"
            className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
          >
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
              alt="google"
            />
            <p className="text-base font-medium ml-4 text-gray-700">
              Continue with Google
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
