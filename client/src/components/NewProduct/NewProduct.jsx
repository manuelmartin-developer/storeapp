import React, { useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Toast } from "../../hooks/useToast";
import { productsContext } from "../../contexts/productsContext";
import { userContext } from "../../contexts/userContext";
import { adminContext } from "../../contexts/adminContext";

const NewProduct = () => {

  const { register, handleSubmit } = useForm();
  const { products, setProducts } = useContext(productsContext);
  const { userLogged } = useContext(userContext);
  const { isAdmin } = useContext(adminContext);


  const onSubmit = (data, e) => {
    if(userLogged && isAdmin){
      const payload = {
        title: data.title,
        image: data.image,
        rating: data.rating,
        price: data.price,
        name: data.name,
        cif: data.cif,
        address: data.address,
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
            "http://localhost:9000/products/add",
            payload,
            options
          );
  
          if (response.status === 201) {
            Toast.fire({
              icon: "success",
              title: "Product added to DB",
            });
  
            setProducts([...products, response.data])
          }
        } catch (error) {
          Toast.fire({
            icon: "error",
            title: "Something has failed",
          });
        }
      })(); 
    }
  };

  return (
    <>
    <p>{products.length}</p>
    <form
    className="signup-form"
    onSubmit={handleSubmit(onSubmit)}
    autoComplete="on"
  >
    <input
      type="text"
      placeholder="title"
      name="title"
      {...register("title", { required: true })}
    />
    <input
      type="url"
      placeholder="image url"
      name="image"
      {...register("image", { required: true })}
    />
    <input
      type="number"
      placeholder="rating"
      name="rating"
      {...register("rating", {
        required: true, maxLength: 1
      })}
    />
    <input
      type="text"
      placeholder="price"
      name="price"
      {...register("price", { required: true })}
    />
    <input
      type="text"
      placeholder="manufacturer name"
      name="name"
      {...register("name", { required: true})}
    />
    <input
      type="text"
      placeholder="manufacturer cif"
      name="cif"
      {...register("cif", { required: true})}
    />
    <input
      type="text"
      placeholder="manufacturer address"
      name="address"
      {...register("address", { required: true})}
    />
    <button type="submit">Add Product</button>
  </form>
    </>
  );
};

export default NewProduct;
