import React, { useContext } from "react";
import { useQueryParam, StringParam } from "use-query-params";
import { productsContext } from "../../contexts/productsContext";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Toast } from "../../hooks/useToast";

const Update = () => {
  const [id] = useQueryParam("id", StringParam);

  const { products, setProducts } = useContext(productsContext);

  const product = products.filter((element) => element.id === id);

  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (data, e) => {
    const payload = {
      id: id,
      title: data.title,
      image: data.image,
      rating: data.rating,
      price: data.price,
      manufacturer: {
        name: data.name,
        cif: data.cif,
        address: data.address,
      },
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
          "https://helloworld-store.herokuapp.com/products/update",
          payload,
          options
        );
        history.push("/");

        if (response.status === 200) {
          Toast.fire({
            icon: "success",
            title: "Product update in DB",
          });

          setProducts([products]);
        }
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "Something has failed",
        });
      }
    })();
  };

  return (
    <section className="update">
      <h1>Product: {product[0].id}</h1>
      <form
        className="update-form"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="on"
      >
        <input
          type="text"
          name="title"
          {...register("title", { required: true, value: product[0].title })}
        />
        <input
          type="url"
          value={product[0].image}
          name="image"
          {...register("image", { required: true, value: product[0].image })}
        />
        <input
          type="number"
          name="rating"
          {...register("rating", {
            required: true,
            maxLength: 1,
            value: product[0].rating,
          })}
        />
        <input
          type="text"
          name="price"
          {...register("price", { required: true, value: product[0].price })}
        />
        <input
          type="text"
          name="name"
          {...register("name", {
            required: true,
            value: product[0].manufacturer.name,
          })}
        />
        <input
          type="text"
          name="cif"
          {...register("cif", {
            required: true,
            value: product[0].manufacturer.cif,
          })}
        />
        <input
          type="text"
          name="address"
          {...register("address", {
            required: true,
            value: product[0].manufacturer.address,
          })}
        />
        <button type="submit">Update Product</button>
      </form>
    </section>
  );
};

export default Update;
