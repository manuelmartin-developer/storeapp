import React from "react";
import { useQueryParam, StringParam } from "use-query-params";
import jwt_decode from "jwt-decode";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Toast } from "../../hooks/useToast";

const Reset = () => {
  const [token] = useQueryParam("token", StringParam);

  const decode = jwt_decode(token);
  const email = decode.email;

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data, e) => {
    if (data.pass1 === data.pass2) {
      const payload = {
        email: email,
        pass1: data.pass1,
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
            "http://localhost:9000/users/reset",
            payload,
            options
          );

          if (response.status === 200) {
            Toast.fire({
              icon: "success",
              title: "Your password has been changed",
            });
            reset();
          }
        } catch (error) {
          Toast.fire({
            icon: "error",
            title: "Something has failed",
          });
        }
      })();
    } else {
      Toast.fire({
        icon: "error",
        title: "Passwords are diferent",
      });
    }
  };

  return (
    <section className="reset">
      <form
        className="signup-form"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <input
          type="text"
          placeholder="new password"
          name="pass1"
          {...register("pass1", { required: true, minLength: 8 })}
        />
        <input
          type="text"
          placeholder="repeat password"
          name="pass2"
          {...register("pass2", { required: true, minLength: 8 })}
        />
        <button type="submit">Reset Password</button>
      </form>
    </section>
  );
};

export default Reset;
