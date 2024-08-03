import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/register`,
        {
          name,
          email,
          password,
        }
      );
      router.push("/login");
    } catch (e) {
      console.log(e);
      toast.error(e.response.data);
    }
  };

  return (
    <div className="container-fluid bg-image">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="border p-4 text-white">
            <h1 className="text-center py-4">Sign Up</h1>
            <div className="form-outline mb-4">
              <label className="form-label " htmlFor="input1">
                Email address
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                id="input1"
                className="form-control"
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label " htmlFor="input2">
                Username
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                id="input2"
                className="form-control"
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="input3">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                id="input3"
                className="form-control"
              />
            </div>
            <button type="submit" className="sign-btn form-outline mb-4 w-100">
              Sign Up
            </button>
            <div className="text-center align-items-center">
              <p className="d-flex align-items-center justify-content-center">
                Already registered?
                <Link
                  className="nav-link active text-blue ms-2 align-items-center"
                  href="/login"
                >
                  Sign In
                </Link>
              </p>

              <p>or sign up with:</p>
              <div>
                <button
                  type="button"
                  className="btn btn-floating mx-1 custom-icon-btn"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </button>
                <button
                  type="button"
                  className="btn  btn-floating mx-1 custom-icon-btn"
                >
                  <FontAwesomeIcon icon={faGoogle} />
                </button>
                <button
                  type="button"
                  className="btn  btn-floating mx-1 custom-icon-btn"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </button>
                <button
                  type="button"
                  className="btn  btn-floating mx-1 custom-icon-btn"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
