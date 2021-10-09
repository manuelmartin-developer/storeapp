import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const Signup = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    if (data) {
      const payload = { 
        name: data.name,
        surname: data.surname,
        email: data.email,
        password: data.password,
        address: data.address 
      };

      (async () => {
        const response = await axios.post(
          "http://localhost:9000/users/signup",
          payload
        );
        console.log(response);
      })();
    }
  };

  return (
    <section className="signup">
      <form
        className="signup-form"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <input
          type="text"
          placeholder="name"
          name="name"
          {...register("name", { required: "You must specify name" })}
        />
        <input
          type="text"
          placeholder="surname"
          name="surname"
          {...register("surname", { required: "You must specify surname" })}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          {...register("email", { required: "You must specify a correct email" })}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          {...register("password", { required: true, minLength: 8 })}
        />
        <input
          type="password"
          placeholder="repeat password"
          name="password_repeat"
          {...register("password_repeat", { required: true, minLength: 8 })}
        />
        <input
          type="text"
          placeholder="address"
          name="address"
          {...register("address", { required: "You must specify an address" })}
        />
        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
};

export default Signup;
