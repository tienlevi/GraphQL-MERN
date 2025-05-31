import { productValidation } from "../validations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../components/Form/Input";
import TextArea from "../components/Form/TextArea";
import Select from "../components/Form/Select";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT, QUERY_PRODUCTS } from "../constants/query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Add() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productValidation),
  });
  const navigate = useNavigate();
  const [mutate, { loading }] = useMutation(CREATE_PRODUCT, {
    refetchQueries: [{ query: QUERY_PRODUCTS }],
    onCompleted: () => {
      toast.success("Create success");
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const categories = [
    { id: "1", name: "Electronics", label: "Electronics" },
    { id: "2", name: "Clothing", label: "Clothing" },
    { id: "3", name: "Books", label: "Books" },
  ];

  const onSubmit = (data: any) => {
    mutate({ variables: { data } });
  };

  return (
    <div className="create-container">
      <h1>Create New Product</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Product Name"
          type="text"
          {...register("name")}
          error={errors.name}
        />

        <Input
          label="Price"
          type="number"
          {...register("price")}
          error={errors.price}
        />

        <TextArea
          label="Description"
          {...register("description")}
          error={errors.description}
        />

        <Select
          options={categories as []}
          label="Category"
          {...register("category")}
          error={errors.category}
        />

        <Input
          label="Rating (max 5)"
          type="number"
          min="0"
          max="5"
          {...register("rating")}
          error={errors.rating}
        />

        <Input
          label="Stock"
          type="number"
          min="0"
          {...register("stock")}
          error={errors.stock}
        />

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Add;
