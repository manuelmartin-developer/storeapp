import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Toast } from "../../hooks/useToast";
import axios from "axios";

const Logout = () => {
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
          Toast.fire({
            icon: "success",
            title: "You have been logout",
          });
          sessionStorage.clear();
          // window.location.href = "/";
        }
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "Error, try again",
        });
      }
    })();
    sessionStorage.clear();
    window.location.href = "/";
  });
  return (
    <section className="productlist">
      <Spinner animation="grow" variant="secondary" />
    </section>
  );
};

export default Logout;
