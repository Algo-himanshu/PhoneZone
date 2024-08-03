import { UserProvider } from "../context";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../public/components/Nav";
import "../main.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

library.add(fab);

function App({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <Nav />
        <div className="mainBody">
          <ToastContainer position="top-center" />
          <Component {...pageProps} />
        </div>
      </UserProvider>
    </>
  );
}

export default App;
