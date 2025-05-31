import { productValidation } from "../validations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../components/Form/Input";
import TextArea from "../components/Form/TextArea";
import Select from "../components/Form/Select";
import { useMutation, useQuery } from "@apollo/client";
import {
  EDIT_PRODUCT,
  GET_PRODUCT_BY_ID,
  QUERY_PRODUCTS,
} from "../constants/query";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Product from "../interface/product";

function Edit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(productValidation),
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useQuery<{ product: Product }>(GET_PRODUCT_BY_ID, {
    variables: { id },
  });

  const [mutate, { loading }] = useMutation(EDIT_PRODUCT, {
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
    mutate({ variables: { id, data } });
  };
  useEffect(() => {
    if (data?.product) {
      const { id: _id, ...product } = data.product;
      reset(product);
    }
  }, [data, reset]);

  return (
    <div className="create-container">
      <h1>Edit Product</h1>

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
          options={categories as any}
          label="Category"
          {...register("category")}
          error={errors.category}
        />

        <Input
          label="Rating (max 5)"
          type="number"
          min="0"
          max="5"
          step="0.1"
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

export default Edit;
