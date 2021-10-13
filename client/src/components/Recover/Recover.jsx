import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Toast } from "../../hooks/useToast";

const Recover = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    const payload = {
      email: data.email,
    };

    const options = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    (async () => {
      try {
        const response = await axios.post(
          "https://helloworld-store.herokuapp.com//users/recover",
          payload,
          options
        );

        if (response.status === 200) {
          Toast.fire({
            icon: "success",
            title: "Please, check your inbox mail",
          });
        }
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "That email is not register in our DB",
        });
      }
    })();
  };
  return (
    <section className="recover">
      <form
        className="recover-form"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <input
          type="email"
          placeholder="email"
          name="email"
          {...register("email", { required: true })}
        />
        <button type="submit">Recover Password</button>
      </form>
    </section>
  );
};

export default Recover;
