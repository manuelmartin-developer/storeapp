import React, { useContext, useEffect } from "react";
import { useQueryParam, StringParam } from "use-query-params";
import { Toast } from "../../hooks/useToast";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { userContext } from "../../contexts/userContext";
import { adminContext } from "../../contexts/adminContext";
import jwt_decode from "jwt-decode";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { setUserLogged, setUserName } = useContext(userContext);
  const { setIsAdmin } = useContext(adminContext);
  const history = useHistory();

  // Email Login
  const onSubmit = (data, e) => {
    const payload = { email: data.email, password: data.password };

    const options = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    (async () => {
      try {
        const response = await axios.post(
          "http://localhost:9000/users/login",
          payload,
          options
        );

        const token = response.data.token;

        sessionStorage.setItem("token", token);
        const decode = jwt_decode(token);

        setUserName(decode.email);
        setUserLogged(true);

        decode.role === "admin" ? setIsAdmin(true) : setIsAdmin(false);

        history.push("/");

        if (response.status === 200) {
          Toast.fire({
            icon: "success",
            title: "Login successfull",
          });
        }
      } catch (error) {
        if (error.response.status === 400) {
          Toast.fire({
            icon: "error",
            title: "This email not is register",
          });
        }
        if (error.response.status === 401) {
          Toast.fire({
            icon: "error",
            title: "Password is wrong",
          });
        }
      }
    })();
  };

  // Login Oauth
  const [token] = useQueryParam("token", StringParam);

  useEffect(() => {
    if (token) {
      (async () => {
        const decode = jwt_decode(token);

        sessionStorage.setItem("token", token);
        setUserLogged(true);
        setUserName(decode.email);

        decode.role === "admin" ? setIsAdmin(true) : setIsAdmin(false);
    
        history.push("/");

      })();
    }
  });

  return (
    <section className="login">
      <form
        className="login-form"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <input
          type="email"
          placeholder="email"
          name="email"
          {...register("email", { required: true })}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          {...register("password", { required: true, minLength: 8 })}
        />
        <button type="submit">Login...</button>
      </form>
      <Link to="/recover" className="login-recover">
        <p>Forgot your password?</p>
      </Link>

      <img
        className="login-img"
        src="/assets/signin_google.png"
        alt=""
        onClick={() =>
          window.open("http://localhost:9000/users/google", "_self")
        }
      />
      <img
        className="login-img"
        src="/assets/signin_github.png"
        alt=""
        onClick={() =>
          window.open("http://localhost:9000/users/github", "_self")
        }
      />

      <Link to="/signup" className="login-recover">
        <p>Don't have an account? Sign up</p>
      </Link>
    </section>
  );
};

export default Login;
