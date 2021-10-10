import React, { useContext, useEffect } from "react";
import { Toast } from "../../hooks/useToast";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import { userContext } from '../../contexts/userContext'
import { adminContext } from '../../contexts/adminContext'
import jwt_decode from "jwt-decode";

const Login = () => {

  const { register, handleSubmit } = useForm();
  const { userLogged, setUserLogged } = useContext(userContext);
  const { isAdmin, setIsAdmin } = useContext(adminContext);

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

        sessionStorage.setItem('token', token);
        const decode = jwt_decode(token);
        
        setUserLogged(true);

        if(decode.role === "admin"){
          setIsAdmin(true);
        }else{
          setIsAdmin(false);
        }
        
        if(response.status === 200){
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
        <p>Remember password</p>
      </Link>
      <Link to="/google" className="login-recover">
        <img className="login-img" src="/assets/signin_google.png" alt="" />
      </Link>
      <Link to="/github" className="login-recover">
        <img className="login-img" src="/assets/signin_github.png" alt="" />
      </Link>
      <Link to="/signup" className="login-recover">
        <p>Dont have account? Sign up here</p>
      </Link>
    </section>
  );
};

export default Login;
