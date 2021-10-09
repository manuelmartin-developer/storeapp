import React from "react";
import { Toast } from "../../hooks/useToast";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    
   if (data){
     const payload = {email: data.email, password: data.password};
     (async () => {
      const response = await axios.post("http://localhost:9000/products", payload);
      console.log(response);
     })()
   }
  }

  return (
    <section className="login">
      <form className="new-form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <input type="email" placeholder="email" name="email" {...register("email", { required: true })} />
        <input type="password" placeholder="password" name="passw" {...register("passw", { required: true, minLength: 8 })} />
        <button type="submit">Login...</button>
      </form>
      <Link to="/recover" className="login-recover">
        <p>Remenber password</p>
      </Link>
    </section>
  );
};

export default Login;
