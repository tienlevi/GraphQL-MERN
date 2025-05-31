import * as yup from "yup";

export const productValidation = yup
  .object({
    name: yup.string().required(),
    price: yup.number().required(),
    description: yup.string(),
    category: yup.string().required(),
    rating: yup.number().max(5).required(),
    stock: yup.number().required(),
  })
  .required();
