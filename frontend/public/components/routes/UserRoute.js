import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { userContext } from "../../../context";
import axios from "axios";

const UserRoute = ({ children }) => {
  const [ok, setOk] = useState(false);
  const router = useRouter();
  const [state] = useContext(userContext);

  useEffect(() => {
    if (state && state.token) {
      fetchCurrentUser();
    } else {
      router.push("/login");
    }
  }, [state]);

  const fetchCurrentUser = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/current-user`,
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      if (data.ok) {
        setOk(true);
      } else {
        router.push("/login");
      }
    } catch (err) {
      router.push("/login");
    }
  };

  return !ok ? (
    <div>
      <h1 className="flex justify-content-center display-1 text-primary p-5">
        Loading...
      </h1>
    </div>
  ) : (
    <>{children}</>
  );
};

export default UserRoute;
