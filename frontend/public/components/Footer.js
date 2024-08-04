import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faTwitter,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div
      className="bg-body-tertiary text-center footer"
      style={{ backgroundColor: "black" }}
    >
      <div className=" footer-container">
        <section className="mb-3">
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faGoogle} />
          </a>

          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>

          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#333333" }}
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </section>
      </div>

      <div
        className="text-center p-3 text-white"
        style={{ backgroundColor: "black" }}
      >
        © 2024 Copyright (Himanshu) :
        <a
          style={{ color: "white" }}
          href="https://github.com/Algo-himanshu/PhoneZone"
        >
          Github repository For This Project
        </a>
      </div>

      {/* Copyright */}
    </div>
  );
};

export default Footer;
