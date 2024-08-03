import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { userContext } from "../../context";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
  const [state, setState] = useContext(userContext);
  const router = useRouter();
  const [current, setCurrent] = useState("");
  const [search, setSearch] = useState("");
  const [searchFor, setSearchFor] = useState("brand");

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(
      `/search?searchFor=${encodeURIComponent(searchFor)}&q=${search}`
    );
  };

  const handleChange = (e) => {
    setSearchFor(e.target.value);
  };

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const logout = () => {
    window.localStorage.removeItem("auth");
    setState(null);
    router.push("/login");
  };
  return (
    <>
      {state !== null ? (
        <nav className="navbar navbar-expand-lg  navbarcss">
          <a className="navbar-brand text-dark" href="#">
            PhoneZone
          </a>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link
                  className={`text-dark nav-link  ${
                    current == "/" && "navasctivecss"
                  } `}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className=" nav-item ">
                <Link
                  className={` text-dark nav-link  ${
                    current == "/search" && "navasctivecss"
                  } `}
                  href="/search"
                >
                  Search
                </Link>
              </li>
              <li>
                <form
                  onSubmit={handleSubmit}
                  className="form-inline d-flex mt-4"
                >
                  <input
                    className="form-control"
                    type="search"
                    value={search}
                    placeholder={`Search by ${
                      searchFor === "model" ? "Model" : "Brand"
                    }`}
                    aria-label="Search"
                    style={{ borderRadius: "5px 0 0 5px" }} // Adjust the radius as needed
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <select
                    className="custom-select"
                    value={searchFor}
                    onChange={handleChange}
                  >
                    <option value="brand">Brand</option>
                    <option value="model">Model</option>
                  </select>
                  <button
                    className="inline btn btn-success"
                    type="submit"
                    style={{ fontSize: "1.3em", borderRadius: "0 5px 5px 0" }} // Adjust the size as needed
                  >
                    <FontAwesomeIcon icon={faSearchengin} />
                  </button>
                </form>
              </li>
            </ul>
          </div>
          <div className="ml-auto">
            <ul className="nav">
              <li className="nav-item">
                <Link
                  className={`text-dark nav-link  ${
                    current == "/dashboard" && "navasctivecss"
                  } `}
                  href="/dashboard"
                >
                  Hello, {state && state.user && state.user.username}
                </Link>
              </li>
              <li className="nav-item ">
                <div
                  onClick={logout}
                  className={`nav-link nav-logout text-dark ${
                    !current && "navasctivecss"
                  }`}
                >
                  Logout
                </div>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Nav;

//<li className="nav-item">
/* <Link className="nav-link active " href="/Dashboard">
{state && state.user && state.user.username}                   
</Link>  */

// explnation:In this case, it checks if state is truthy, then if state.user is truthy,
// and finally if state.user.username is truthy. If any part is falsy, it stops and returns
// that falsy value. If all parts are truthy, it returns the last truthy value (state.user.username).
