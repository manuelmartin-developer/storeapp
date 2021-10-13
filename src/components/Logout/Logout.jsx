import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Toast } from "../../hooks/useToast";
import axios from "axios";
import { userContext } from "../../contexts/userContext";

const Logout = () => {
  const { setUserLogged } = useContext(userContext);
  const history = useHistory();

  const payload = {
    token: sessionStorage.getItem("token"),
  };

  const options = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post(
          "http://localhost:9000/users/logout",
          payload,
          options
        );

        if (response.status === 200) {
          setUserLogged(false);
          sessionStorage.clear();
          history.push("/");
          Toast.fire({
            icon: "success",
            title: "You have been logout",
          });
        }
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "Error, try again",
        });
      }
    })();
  });
  return <></>;
};

export default Logout;
