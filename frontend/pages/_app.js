import { UserProvider } from "../context";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../public/components/Nav";
import "../main.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Footer from "../public/components/Footer";

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
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
