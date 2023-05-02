import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvide";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    setSuccess(false);
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    // validate password
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setPasswordError("Please provide at least two uppercase");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Please should be at least 6 characters.");
      return;
    }
    if (!/(?=.*[!@#$&*])/.test(password)) {
      setPasswordError("Please add at least one special character");
      return;
    }
    setPasswordError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
        form.reset();
        navigate("/");
      })

      .catch((error) => {
        console.error(error);
        setPasswordError(error.message);
      });
  };

  return (
    <div className="flex justify-center text-black py-20">
      <div className="card w-full max-w-lg shadow-2xl bg-pink-50">
        <h1 className="font-bold text-4xl text-center pt-6 ">
          Create An Account
        </h1>
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Your Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered border-zinc-900 bg-white"
              required
            />
            <label className="label">
              <span className="label-text text-black">Your Photo</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo url"
              className="input input-bordered border-zinc-900 bg-white"
              required
            />
            <label className="label">
              <span className="label-text text-black">Email Address</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered border-zinc-900 bg-white"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Password</span>
            </label>

            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered border-zinc-900 bg-white"
            />
            <label className="label text-pink-600">
              <p>Already have an account....</p>
              <Link to="/login" className=" text-pink-600 font-semibold">
                Login
              </Link>
            </label>
          </div>
          <div className="flex justify-start">
            <input
              type="radio"
              name="radio-7"
              className="radio radio-info"
              required
            />
            <p>Accept terms and condition</p>
          </div>
          <p className="text-error">{passwordError}</p>
          {success && <p className="text-black">User Created Successfully.</p>}
          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn btn-outline-secondary bg-pink-600 text-white"
              value="signUp"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
