import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import { MdOutlineMail } from "react-icons/md";
import { MdPassword } from "react-icons/md";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isError = false;

  return (
    <div className="max-w-screen-xl mx-auto bg-gradient-to-br from-[#0B0C1A] via-[#1A1033] to-[#160C29] flex h-screen">
      <div className="flex-col flex-1 hidden lg:flex items-center  justify-center">
        {/* <XSvg className="lg:w-2/3 fill-blue" /> */}
        <img src={Logo} alt="Social Bloom" className="lg:w-2/3" />
        <p className="text-4xl">Bloom where you're planted</p>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <form className="flex gap-4 flex-col" onSubmit={handleSubmit}>
          {/* <XSvg className="w-24 lg:hidden fill-white" /> */}
          {/* <img src={Logo} alt="Social Bloom" className="lg:w-2/3" /> */}
          <h1 className="text-4xl font-extrabold">{"Let's"} go.</h1>
          <label className="input input-bordered rounded flex items-center gap-2">
            <MdOutlineMail />
            <input
              type="text"
              className="grow"
              placeholder="username"
              name="username"
              onChange={handleInputChange}
              value={formData.username}
            />
          </label>

          <label className="input input-bordered rounded flex items-center gap-2">
            <MdPassword />
            <input
              type="password"
              className="grow"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
              value={formData.password}
            />
          </label>
          <button className="btn rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white">
            Login
          </button>
          {isError && <p className="text-red-500">Something went wrong</p>}
        </form>
        <div className="flex flex-col gap-2 mt-4">
          <p className="text-primary text-lg">{"Don't"} have an account?</p>
          <Link to="/signup">
            <button className="btn rounded-full btn-primary text-white btn-outline w-full">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
